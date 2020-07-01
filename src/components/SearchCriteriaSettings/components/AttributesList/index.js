import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { arrayOf, func, shape } from 'prop-types';
import { Button, Field, GridItem, useStyles } from '@cdiscount/backoffice-ui';
import { ceruleano, red } from '@cdiscount/ui-colors';
import { FormLabel } from '@material-ui/core';
import { isNil, pathOr } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import { enginePropTypes } from '../../../EngineForm/enginePropTypes';
import { ExternalCodeByIds, ExternalCodeIdsOptions, KeysOptions } from './config';
import styles from './styles';
import useAttributes from './useAttributes';

const AttributesList = ({ attributes, handleChange, allParameters, engine, currentInputField }) => {
  const {
    onDelete,
    mappedAttributes,
    key,
    externalCodeId,
    addAttribute,
    onChangeExternalCodeId,
    onHandleKey,
    onHandleExternalKey,
    onHandleAttribute,
  } = useAttributes({ handleChange, attributes, engine, currentInputField });

  const renderRow = (option, index) => {
    const isAddBloc = isNil(index) && index !== 0;
    const addedExternalId = pathOr(null, ['value', 'externalCodeId'], option);

    if (!isAddBloc && isNilOrEmpty(option)) return null;

    return (
      <Grid container spacing={3}>
        <Grid item columns={5} xs={5} md={5} lg={5}>
          <Field
            label="Attribut"
            type="select"
            onChange={isAddBloc ? onHandleExternalKey : onChangeExternalCodeId(index)}
            value={isAddBloc ? externalCodeId : pathOr({}, [addedExternalId], ExternalCodeByIds)}
            selectProps={ExternalCodeIdsOptions}
          />
        </Grid>
        <Grid item columns={5} xs={5} md={5} lg={5}>
          <Field
            label="Variable Correspondante"
            type="select"
            onChange={isAddBloc ? onHandleKey : onHandleAttribute(index)}
            value={isAddBloc ? key : option}
            selectProps={KeysOptions(allParameters)}
          />
        </Grid>
        <GridItem xs={1} md={1} lg={1}>
          {isAddBloc ? (
            <Button size="large" icon={AddCircle} onClick={addAttribute} style={{ color: ceruleano }} />
          ) : (
            <Button size="large" icon={RemoveCircle} onClick={onDelete(index)} style={{ color: red }} />
          )}
        </GridItem>
      </Grid>
    );
  };

  const renderAttributesList = () => {
    if (isNilOrEmpty(mappedAttributes)) return null;

    return mappedAttributes.map(renderRow);
  };

  const classes = useStyles(styles);

  return (
    <>
      <FormLabel className={classes.StyledFormLabel}>Parametre lie dans l&apos;url de recherche</FormLabel>
      <div>
        <br />
        {renderAttributesList()}
        {renderRow()}
      </div>
    </>
  );
};

AttributesList.propTypes = {
  allParameters: arrayOf(shape({})),
  attributes: arrayOf(shape({})),
  handleChange: func,
  engine: enginePropTypes,
  currentInputField: shape({}),
};

AttributesList.defaultProps = {
  allParameters: null,
  attributes: null,
  handleChange: Function.Prototype,
  engine: null,
  currentInputField: null,
};

export default AttributesList;
