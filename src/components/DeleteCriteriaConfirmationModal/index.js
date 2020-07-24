import { bool, func } from 'prop-types';
import { contains, isNil, join, length, pathOr, pickBy, pipe, pluck, values } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react';

import { DELETE_CRITERIA_REQUEST } from '../CriteriaDataGrid/actions';
import ConfirmationModal from '../ConfirmationModal';

export default function DeleteCriteriaConfirmationModal({ open, toggle }) {
  const dispatch = useDispatch();

  const deleteCriteria = useCallback(() => dispatch({ type: DELETE_CRITERIA_REQUEST }), [dispatch]);

  const selected = useSelector(pathOr([], ['navigation', 'criteria', 'selected']));
  const namesSelector = pipe(
    pathOr([], ['entities', 'criteria', 'byId']),
    pickBy((value, key) => contains(key, selected)),
    values,
    pluck('explanation'),
    join(', '),
  );
  const names = useSelector(namesSelector);

  if (isNilOrEmpty(names)) return null;

  const deleteMoreThanOneCriterion = !isNil(selected) && length(selected) > 1;
  const withS = deleteMoreThanOneCriterion ? 's' : '';
  const withU = deleteMoreThanOneCriterion ? 'es' : 'u';

  return (
    <ConfirmationModal
      isOpen={open}
      title={`Suppression d${withU} critère${withS}`}
      toggle={toggle}
      confirm={deleteCriteria}
    >
      <Typography>{`Confirmez-vous la suppression d${withU} critère${withS} suivant${withS} : ${names} ?`}</Typography>
    </ConfirmationModal>
  );
}

DeleteCriteriaConfirmationModal.propTypes = {
  open: bool,
  toggle: func,
};

DeleteCriteriaConfirmationModal.defaultProps = {
  open: false,
  toggle: Function.prototype,
};
