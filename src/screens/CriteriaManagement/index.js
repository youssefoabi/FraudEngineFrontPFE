import { Delete } from '@material-ui/icons';
import { Footer, Screen } from '@cdiscount/backoffice-ui';
import { path, pathOr, pipe } from 'ramda';
import { Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Add from '@material-ui/icons/AddBox';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useCallback, useMemo, useState } from 'react';

import {
  RESET_DELETE_CRITERIA_ERROR,
  RESET_DELETE_CRITERIA_SUCCESS,
} from '../../components/CriteriaDataGrid/actions';
import { sortBy } from '../../helpers';
import CriteriaDataGrid from '../../components/CriteriaDataGrid';
import DeleteCriteriaConfirmationModal from '../../components/DeleteCriteriaConfirmationModal';
import paginate from '../../components/CriteriaDataGrid/paginate';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';
import useCriteria from './useCriteria';
import useDataGridReducer from '../../components/CriteriaDataGrid/useDataGridReducer';

function CriteriaManagement() {
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const { order, orderBy, page, rowsPerPage, selected } = useDataGridReducer();
  const { criteria } = useCriteria();

  const rows = useMemo(() => pipe(sortBy(order, orderBy), paginate(page, rowsPerPage))(criteria), [
    criteria,
    order,
    orderBy,
    page,
    rowsPerPage,
  ]);
  const deleteStatus = useSelector(path(['navigation', 'criteria', 'deleteStatus']));

  const toggleDeletionModal = () => {
    setDeletionModalOpen(!deletionModalOpen);
  };

  const actions = [
    {
      icon: Delete,
      label: 'Supprimer les critères sélectionnés',
      onClick: toggleDeletionModal,
      color: 'quaternary',
      disabled: !selected ? false : selected.length === 0,
    },
  ];

  const dispatch = useDispatch();

  const onCloseErrorSnackbar = useCallback(() => dispatch({ type: RESET_DELETE_CRITERIA_ERROR }), [dispatch]);
  const onShowSuccessSnackbar = useCallback(() => dispatch({ type: RESET_DELETE_CRITERIA_SUCCESS }), [
    dispatch,
  ]);

  return (
    <Screen
      titlebar={
        <TitleBar
          title="GESTION DES CRITÈRES"
          actions={[
            {
              id: 'new_criterion_button',
              label: 'CRÉER UN CRITÈRE',
              icon: Add,
              size: 'large',
              href: '/criteria/create',
            },
          ]}
        />
      }
      bottombar={<Footer />}
    >
      <CriteriaDataGrid actions={actions} rowCount={pathOr(0, ['length'], criteria)} rows={rows} />
      <DeleteCriteriaConfirmationModal open={deletionModalOpen} toggle={toggleDeletionModal} />
      {deleteStatus.errorMessage && (
        <Snackbar open autoHideDuration={6000} onClose={onCloseErrorSnackbar}>
          <MuiAlert onClose={onCloseErrorSnackbar} severity="error">
            {deleteStatus.errorMessage}
          </MuiAlert>
        </Snackbar>
      )}
      {deleteStatus.criteriaDeleteSuccess && (
        <Snackbar open autoHideDuration={6000} onClose={onShowSuccessSnackbar}>
          <MuiAlert onClose={onShowSuccessSnackbar} severity="success">
            La séléction a bien été supprimée
          </MuiAlert>
        </Snackbar>
      )}
      <ServerActionBackdrop />
    </Screen>
  );
}

export default CriteriaManagement;
