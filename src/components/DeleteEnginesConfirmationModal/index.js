import { bool, func } from 'prop-types';
import { contains, isEmpty, isNil, join, length, pathOr, pickBy, pipe, pluck, values } from 'ramda';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';

import { DELETE_ENGINES_REQUEST } from '../EnginesDataGrid/actions';
import ConfirmationModal from '../ConfirmationModal';

export default function DeleteEnginesConfirmationModal({ open, toggle }) {
  const dispatch = useDispatch();

  const deleteEngines = useCallback(() => dispatch({ type: DELETE_ENGINES_REQUEST }), [dispatch]);

  const selected = useSelector(pathOr([], ['navigation', 'engines', 'selected']));
  const namesSelector = pipe(
    pathOr([], ['entities', 'engines', 'byId']),
    pickBy((value, key) => contains(+key, selected)),
    values,
    pluck('name'),
    join(', '),
  );
  const names = useSelector(namesSelector);

  if (isNil(names) || isEmpty(names)) return null;

  const deleteMoreThanOneEngine = !isNil(selected) && length(selected) > 1;
  const withS = deleteMoreThanOneEngine ? 's' : '';
  const withU = deleteMoreThanOneEngine ? 'es' : 'u';

  return (
    <ConfirmationModal
      isOpen={open}
      title={`Suppression d${withU} moteur${withS}`}
      toggle={toggle}
      confirm={deleteEngines}
    >
      <Typography>{`Confirmez-vous la suppression d${withU} moteur${withS} suivant${withS} : ${names} ?`}</Typography>
    </ConfirmationModal>
  );
}

DeleteEnginesConfirmationModal.propTypes = {
  open: bool,
  toggle: func,
};

DeleteEnginesConfirmationModal.defaultProps = {
  open: false,
  toggle: Function.prototype,
};
