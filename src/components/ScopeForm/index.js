import { func } from 'prop-types';
import { Grid, Snackbar } from '@material-ui/core';
import { path } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useCallback } from 'react';

import { RESET_SCOPE_SAVE_ERROR, RESET_SCOPE_SAVE_SUCCESS } from './actions';
import ScopeDataEdit, { scopeShape } from '../ScopeDataEdit';
import ScopeEditionHelper from '../ScopeEditionHelper';

const ScopeForm = ({ scope, setScope }) => {
  const onDataEditChange = ({ id, value }) =>
    setScope(prevScope => ({
      ...prevScope,
      [id]: value,
    }));

  const dispatch = useDispatch();

  const onCloseErrorSnackbar = useCallback(() => dispatch({ type: RESET_SCOPE_SAVE_ERROR }), [dispatch]);
  const onShowSuccessSnackbar = useCallback(() => dispatch({ type: RESET_SCOPE_SAVE_SUCCESS }), [dispatch]);

  const error = useSelector(path(['navigation', 'scopeFormError']));
  const success = useSelector(path(['navigation', 'scopeFormSuccess']));

  return (
    <Grid container direction="column">
      <ScopeDataEdit scope={scope} handleChange={onDataEditChange} />
      <ScopeEditionHelper scope={scope} />
      {error?.errorMessage && (
        <Snackbar open autoHideDuration={6000} onClose={onCloseErrorSnackbar}>
          <MuiAlert onClose={onCloseErrorSnackbar} severity="error">
            {error.errorMessage}
          </MuiAlert>
        </Snackbar>
      )}
      {success?.scopeSaveSuccess && (
        <Snackbar open autoHideDuration={6000} onClose={onShowSuccessSnackbar}>
          <MuiAlert onClose={onShowSuccessSnackbar} severity="success">
            La gamme a bien été enregistrée
          </MuiAlert>
        </Snackbar>
      )}
    </Grid>
  );
};

ScopeForm.propTypes = {
  scope: scopeShape,
  setScope: func,
};

ScopeForm.defaultProps = {
  scope: null,
  setScope: Function.prototype,
};

export default ScopeForm;
