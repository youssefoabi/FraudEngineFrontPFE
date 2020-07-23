import { func } from 'prop-types';
import { Grid, Snackbar } from '@material-ui/core';
import { GridItem } from '@cdiscount/backoffice-ui';
import { pathOr } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useCallback } from 'react';

import { RESET_RULE_SAVE_ERROR, RESET_RULE_SAVE_SUCCESS } from './actions';
import { rulePropTypes } from './rulePropTypes';
import CriteriaSettings from '../CriteriaSettings';
import RuleGeneralInformationsSettings from '../RuleGeneralInformationsSettings';

const RuleForm = ({ rule, setRule }) => {
  const onDataEditChange = ({ id, value }) =>
    setRule(prevRule => ({
      ...prevRule,
      [id]: value,
    }));

  const resetRule = () => setRule({ isEnable: false, isValidated: false, isActivated: false });

  const dispatch = useDispatch();

  const onCloseErrorSnackbar = useCallback(() => dispatch({ type: RESET_RULE_SAVE_ERROR }), [dispatch]);
  const onShowSuccessSnackbar = useCallback(() => dispatch({ type: RESET_RULE_SAVE_SUCCESS }), [dispatch]);

  const error = useSelector(pathOr(null, ['navigation', 'ruleFormError', 'errorMessage']));
  const success = useSelector(pathOr(null, ['navigation', 'ruleFormSuccess', 'ruleSaveSuccess']));

  return (
    <Grid container direction="column">
      <Grid container spacing={2}>
        <GridItem item xs={12} sm={12} md={4} xl={4}>
          <RuleGeneralInformationsSettings
            rule={rule}
            handleChange={onDataEditChange}
            resetRule={resetRule}
          />
        </GridItem>
        <GridItem item xs={12} sm={12} md={8} xl={8}>
          <CriteriaSettings rule={rule} handleChange={onDataEditChange} />
        </GridItem>
      </Grid>
      {error && (
        <Snackbar open autoHideDuration={6000} onClose={onCloseErrorSnackbar}>
          <MuiAlert onClose={onCloseErrorSnackbar} severity="error">
            {error}
          </MuiAlert>
        </Snackbar>
      )}
      {success && (
        <Snackbar open autoHideDuration={6000} onClose={onShowSuccessSnackbar}>
          <MuiAlert onClose={onShowSuccessSnackbar} severity="success">
            La règle a bien été enregistré
          </MuiAlert>
        </Snackbar>
      )}
    </Grid>
  );
};

RuleForm.propTypes = {
  rule: rulePropTypes,
  setRule: func,
};

RuleForm.defaultProps = {
  rule: null,
  setRule: Function.prototype,
};

export default RuleForm;
