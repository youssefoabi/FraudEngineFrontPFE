import { func } from 'prop-types';
import { Grid, Snackbar } from '@material-ui/core';
import { pathOr } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useCallback } from 'react';

import { enginesGroupPropTypes } from './enginesGroupPropTypes';
import { RESET_ENGINESGROUP_SAVE_ERROR, RESET_ENGINESGROUP_SAVE_SUCCESS } from './actions';
import EngineProperties from '../EngineProperties';
import PreviewSettings from '../PreviewSettings';
import SelectEnginesSettings from '../SelectEnginesSettings';

const EnginesGroupForm = ({ enginesGroup, setEnginesGroup }) => {
  const onDataEditChange = ({ id, value }) =>
    setEnginesGroup(prevEnginesGroup => ({
      ...prevEnginesGroup,
      [id]: value,
    }));

  const dispatch = useDispatch();

  const onCloseErrorSnackbar = useCallback(() => dispatch({ type: RESET_ENGINESGROUP_SAVE_ERROR }), [
    dispatch,
  ]);
  const onShowSuccessSnackbar = useCallback(() => dispatch({ type: RESET_ENGINESGROUP_SAVE_SUCCESS }), [
    dispatch,
  ]);

  const error = useSelector(pathOr(null, ['navigation', 'enginesGroupFormError', 'errorMessage']));
  const success = useSelector(
    pathOr(null, ['navigation', 'enginesGroupFormSuccess', 'enginesGroupSaveSuccess']),
  );

  return (
    <Grid container direction="column">
      <SelectEnginesSettings enginesGroup={enginesGroup} handleChange={onDataEditChange} />
      <EngineProperties enginesGroup={enginesGroup} handleChange={onDataEditChange} />
      <PreviewSettings />
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
            Le groupe de moteurs a bien été enregistré
          </MuiAlert>
        </Snackbar>
      )}
    </Grid>
  );
};

EnginesGroupForm.propTypes = {
  enginesGroup: enginesGroupPropTypes,
  setEnginesGroup: func,
};

EnginesGroupForm.defaultProps = {
  enginesGroup: null,
  setEnginesGroup: Function.prototype,
};

export default EnginesGroupForm;
