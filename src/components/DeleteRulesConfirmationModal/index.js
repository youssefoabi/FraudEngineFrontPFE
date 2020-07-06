import { bool, func } from 'prop-types';
import { contains, isNil, join, length, pathOr, pickBy, pipe, pluck, values } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';

import { DELETE_RULES_REQUEST } from '../RulesDataGrid/actions';
import ConfirmationModal from '../ConfirmationModal';

export default function DeleteRulesConfirmationModal({ open, toggle }) {
  const dispatch = useDispatch();

  const deleteRules = useCallback(() => dispatch({ type: DELETE_RULES_REQUEST }), [dispatch]);

  const selected = useSelector(pathOr([], ['navigation', 'rules', 'selected']));
  const namesSelector = pipe(
    pathOr([], ['entities', 'rules', 'byId']),
    pickBy((value, key) => contains(+key, selected)),
    values,
    pluck('name'),
    join(', '),
  );
  const names = useSelector(namesSelector);

  if (isNilOrEmpty(names)) return null;

  const deleteMoreThanOneRule = !isNil(selected) && length(selected) > 1;
  const withS = deleteMoreThanOneRule ? 's' : '';
  const withU = deleteMoreThanOneRule ? 'es' : 'e la';

  return (
    <ConfirmationModal
      isOpen={open}
      title={`Suppression d${withU} règle${withS}`}
      toggle={toggle}
      confirm={deleteRules}
    >
      <Typography>{`Confirmez-vous la suppression d${withU} règle${withS} suivant${withS} : ${names} ?`}</Typography>
    </ConfirmationModal>
  );
}

DeleteRulesConfirmationModal.propTypes = {
  open: bool,
  toggle: func,
};

DeleteRulesConfirmationModal.defaultProps = {
  open: false,
  toggle: Function.prototype,
};
