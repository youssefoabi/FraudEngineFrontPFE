import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { arrayOf, func, shape } from 'prop-types';
import { Button, Field, GridItem, useStyles } from '@cdiscount/backoffice-ui';
import { ceruleano, red } from '@cdiscount/ui-colors';
import { find, isNil, pathOr, prop, propEq } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import { rulePropTypes } from '../../../RuleForm/rulePropTypes';
import styles from './styles';
import useCriteria from './useCriteria';

const CriteriaList = ({ criteria, handleChange, allCriteria }) => {
  const classes = useStyles(styles);

  const {
    onDelete,
    criterion,
    operator,
    value,
    addCriterion,
    onChangeCriterion,
    onChangeOperator,
    onChangeValue,
    onHandleCriterion,
    onHandleOperator,
    onHandleValue,
  } = useCriteria({ criteria, handleChange });

  const renderRow = (option, index) => {
    const isAddBloc = isNil(index) && index !== 0;
    const currentCriterion = pathOr(null, ['criterion'], option);
    const currentOperator = pathOr(null, ['operator'], option);
    const currentValue = pathOr(null, ['value'], option);

    if (!isAddBloc && isNilOrEmpty(option)) return null;

    return (
      <Grid container spacing={1}>
        <Grid item columns={5} xs={5} md={5} lg={5}>
          <Field
            type="select"
            onChange={isAddBloc ? onHandleCriterion : onChangeCriterion(index)}
            value={isAddBloc ? criterion : currentCriterion}
            selectProps={{ options: allCriteria }}
          />
        </Grid>
        <Grid item columns={3} xs={3} md={3} lg={3}>
          {isNilOrEmpty(criterion) && isNilOrEmpty(currentCriterion) ? null : (
            <Field
              type="select"
              onChange={isAddBloc ? onHandleOperator : onChangeOperator(index)}
              value={isAddBloc ? operator : currentOperator}
              selectProps={{
                options: isAddBloc
                  ? pathOr([], ['value', 'eligibleOperators'], criterion)
                  : pathOr(
                      [],
                      ['value', 'eligibleOperators'],
                      find(propEq('label', prop('label', currentCriterion)))(allCriteria),
                    ),
              }}
            />
          )}
        </Grid>
        <Grid item columns={3} xs={3} md={3} lg={3}>
          {isNilOrEmpty(operator) && isNilOrEmpty(currentOperator) ? null : (
            <TextField
              className={classes.container}
              InputProps={{ style: { fontSize: '22px' }, disableUnderline: true }}
              onChange={isAddBloc ? onHandleValue : onChangeValue(index)}
              type="input"
              value={isAddBloc ? value : currentValue}
            />
          )}
        </Grid>
        <GridItem xs={1} md={1} lg={1} className={classes.buttonContainer}>
          {isAddBloc ? (
            <Button
              className={classes.button}
              size="large"
              icon={AddCircle}
              onClick={addCriterion}
              style={{ color: ceruleano }}
            />
          ) : (
            <Button
              className={classes.button}
              size="large"
              icon={RemoveCircle}
              onClick={onDelete(index)}
              style={{ color: red }}
            />
          )}
        </GridItem>
      </Grid>
    );
  };

  const renderCriteriaList = () => {
    if (isNilOrEmpty(criteria)) return null;

    return criteria.map(renderRow);
  };

  return (
    <div>
      <br />
      {renderCriteriaList()}
      {renderRow()}
    </div>
  );
};

CriteriaList.propTypes = {
  allCriteria: arrayOf(shape({})),
  criteria: arrayOf(shape({})),
  handleChange: func,
  rule: rulePropTypes,
};

CriteriaList.defaultProps = {
  allCriteria: null,
  criteria: null,
  handleChange: Function.Prototype,
  rule: null,
};

export default CriteriaList;
