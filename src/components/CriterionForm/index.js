import { func } from 'prop-types';
import { Grid, Snackbar } from '@material-ui/core';
import { pathOr } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useCallback } from 'react';

import { criterionPropTypes } from './criterionPropTypes';
import { RESET_CRITERION_SAVE_ERROR, RESET_CRITERION_SAVE_SUCCESS } from './actions';
import CriterionInformationsSettings from '../CriterionInformationsSettings';

const CriterionForm = ({ criterion, setCriterion }) => {
  const onDataEditChange = ({ id, value }) =>
    setCriterion(prevCriterion => ({
      ...prevCriterion,
      [id]: value,
    }));

  const dispatch = useDispatch();

  const onCloseErrorSnackbar = useCallback(() => dispatch({ type: RESET_CRITERION_SAVE_ERROR }), [dispatch]);
  const onShowSuccessSnackbar = useCallback(() => dispatch({ type: RESET_CRITERION_SAVE_SUCCESS }), [
    dispatch,
  ]);

  const error = useSelector(pathOr(null, ['navigation', 'criterionFormError', 'errorMessage']));
  const success = useSelector(pathOr(null, ['navigation', 'criterionFormSuccess', 'criterionSaveSuccess']));

  return (
    <Grid container direction="column">
      <CriterionInformationsSettings criterion={criterion} handleChange={onDataEditChange} />
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
            Le critère a bien été enregistré
          </MuiAlert>
        </Snackbar>
      )}
    </Grid>
  );
};

CriterionForm.propTypes = {
  criterion: criterionPropTypes,
  setCriterion: func,
};

CriterionForm.defaultProps = {
  criterion: null,
  setCriterion: Function.prototype,
};

export default CriterionForm;
