import { func, shape } from 'prop-types';
import { Grid } from '@material-ui/core';
import { GridItem, useStyles } from '@cdiscount/backoffice-ui';
import React from 'react';

import CriteriaList from './components/CriteriaList';
import styles from './styles';
import useCriteriaSettings from './useCriteriaSettings';

const ParametersBlock = ({ rule, handleChange }) => {
  const { criteria, allCriteria } = useCriteriaSettings({
    handleChange,
    rule,
  });

  const classes = useStyles(styles);

  return (
    <Grid item xs={12} md={12} lg={12}>
      <GridItem title="La liste des critères">
        <div className={classes.header}>
          <span className={classes.criteria}>Critère</span>
          <span className={classes.menuItem}>Opérateur</span>
          <span className={classes.menuItem}>Valeur</span>
        </div>
        <CriteriaList allCriteria={allCriteria} criteria={criteria} handleChange={handleChange} rule={rule} />
      </GridItem>
    </Grid>
  );
};

ParametersBlock.propTypes = {
  rule: shape({}),
  handleChange: func,
};

ParametersBlock.defaultProps = {
  rule: null,
  handleChange: Function.Prototype,
};

export default ParametersBlock;
