import { addIndex, compose, find, insert, map, remove, toString } from 'ramda';
import { arrayOf, func, shape, string } from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { isNilOrEmpty } from 'ramda-adjunct';
import { useStyles } from '@cdiscount/backoffice-ui';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import DragDeletableChip from './DragDeletableChip';
import styles from './styles';

const DraggableList = ({ data, renderItem, keyExtractor, onOrderChange, droppableId }) => {
  const classes = useStyles(styles);
  const reorder = (draggableId, newIndex, oldIndex) => {
    const draggableItem = find(item => toString(keyExtractor(item)) === draggableId, data || []);

    return compose(insert(newIndex, draggableItem), remove(oldIndex, 1))(data || []);
  };

  const onDragEnd = result => {
    if (isNilOrEmpty(result)) return null;

    const { source, destination, draggableId } = result;
    if (isNilOrEmpty(source) || isNilOrEmpty(destination) || isNilOrEmpty(draggableId)) return null;

    const { droppableId: droppableIdSource, index: indexSource } = source || {};
    const { droppableId: droppableIdDestination, index: indexDestination } = destination || {};
    if (!(droppableIdSource === droppableIdDestination && indexSource !== indexDestination)) return null;

    const newItems = reorder(draggableId, indexDestination, indexSource);

    onOrderChange(newItems);
    return null;
  };

  const renderElement = (item, index) => {
    const id = keyExtractor(item);

    return (
      <DragDeletableChip key={id} position={index} id={id}>
        {renderItem({ item, index })}
      </DragDeletableChip>
    );
  };

  const renderItems = () => {
    const mapIndexed = addIndex(map);

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={droppableId} direction="horizontal">
          {provided => (
            <div className={classes.droppableContainer} ref={provided.innerRef} {...provided.droppableProps}>
              <Grid container direction="row">
                {mapIndexed((item, index) => renderElement(item, index), data)}
              </Grid>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  };

  if (isNilOrEmpty(data)) return null;

  return (
    <Grid item container direction="row">
      {renderItems()}
    </Grid>
  );
};

DraggableList.propTypes = {
  data: arrayOf(shape()),
  onOrderChange: func,
  keyExtractor: func,
  renderItem: func,
  droppableId: string,
};
DraggableList.defaultProps = {
  data: null,
  onOrderChange: Function.prototype,
  keyExtractor: Function.prototype,
  renderItem: Function.prototype,
  droppableId: null,
};

export default DraggableList;
