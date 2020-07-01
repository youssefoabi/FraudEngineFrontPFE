import { Draggable } from 'react-beautiful-dnd';
import { elementType, number } from 'prop-types';
import { isNilOrEmpty } from 'ramda-adjunct';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const DragDeletableChip = ({ children, position, id }) => {
  if (isNilOrEmpty(children)) return null;

  const renderDraggableItem = provided =>
    provided && (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        {children}
      </div>
    );

  return (
    <Grid item>
      <Draggable key={id} draggableId={`${id}`} index={position}>
        {provided => renderDraggableItem(provided)}
      </Draggable>
    </Grid>
  );
};

DragDeletableChip.propTypes = {
  children: elementType,
  position: number,
  id: number,
};

DragDeletableChip.defaultProps = {
  children: null,
  position: null,
  id: null,
};

export default DragDeletableChip;
