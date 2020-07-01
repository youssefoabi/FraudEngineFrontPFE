import { func } from 'prop-types';
import { Grid, Snackbar } from '@material-ui/core';
import { pathOr } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import config from 'react-global-configuration';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useCallback } from 'react';

import { enginePropTypes } from './enginePropTypes';
import { RESET_ENGINE_SAVE_ERROR, RESET_ENGINE_SAVE_SUCCESS } from './actions';
import GeneralInformationsSettings from '../GeneralInformationsSettings';
import SearchCriteriaSettings from '../SearchCriteriaSettings';
import VisualSettings from '../VisualSettings';

const EngineForm = ({ engine, setEngine }) => {
  const onDataEditChange = ({ id, value }) => {
    if (id === 'id' && config.get('IsCodeEngineFieldActivated')) return null;

    return setEngine(prevEngine => ({
      ...prevEngine,
      [id]: value,
    }));
  };

  const dispatch = useDispatch();

  const onCloseErrorSnackbar = useCallback(() => dispatch({ type: RESET_ENGINE_SAVE_ERROR }), [dispatch]);
  const onShowSuccessSnackbar = useCallback(() => dispatch({ type: RESET_ENGINE_SAVE_SUCCESS }), [dispatch]);

  const error = useSelector(pathOr(null, ['navigation', 'engineFormError', 'errorMessage']));
  const success = useSelector(pathOr(null, ['navigation', 'engineFormSuccess', 'engineSaveSuccess']));

  return (
    <Grid container direction="column">
      <GeneralInformationsSettings engine={engine} handleChange={onDataEditChange} />
      <VisualSettings engine={engine} handleChange={onDataEditChange} />
      <SearchCriteriaSettings engine={engine} handleChange={onDataEditChange} />
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
            Le moteur de recherche a bien été enregistré
          </MuiAlert>
        </Snackbar>
      )}
    </Grid>
  );
};

EngineForm.propTypes = {
  engine: enginePropTypes,
  setEngine: func,
};

EngineForm.defaultProps = {
  engine: null,
  setEngine: Function.prototype,
};

export default EngineForm;
