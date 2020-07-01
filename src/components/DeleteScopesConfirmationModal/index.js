import { bool, func } from 'prop-types';
import { contains, join, pathOr, pickBy, pipe, pluck, values } from 'ramda';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';

import { DELETE_SCOPES_REQUEST } from '../ScopesDataGrid/actions';
import ConfirmationModal from '../ConfirmationModal';

export default function DeleteScopesConfirmationModal({ open, toggle }) {
  const dispatch = useDispatch();

  const deleteScopes = useCallback(() => dispatch({ type: DELETE_SCOPES_REQUEST }), [dispatch]);

  const selected = useSelector(pathOr([], ['navigation', 'scopes', 'selected']));
  const namesSelector = pipe(
    pathOr([], ['entities', 'scopes', 'byId']),
    pickBy((value, key) => contains(+key, selected)),
    values,
    pluck('name'),
    join(', '),
  );
  const names = useSelector(namesSelector);

  return (
    <ConfirmationModal isOpen={open} title="Suppression des gammes" toggle={toggle} confirm={deleteScopes}>
      <Typography>{`Confirmez-vous la suppression des gammes suivantes : ${names} ?`}</Typography>
    </ConfirmationModal>
  );
}

DeleteScopesConfirmationModal.propTypes = {
  open: bool,
  toggle: func,
};

DeleteScopesConfirmationModal.defaultProps = {
  open: false,
  toggle: Function.prototype,
};
