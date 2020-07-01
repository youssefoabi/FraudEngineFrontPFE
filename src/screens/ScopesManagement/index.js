import { Delete } from '@material-ui/icons';
import { Footer, Screen } from '@cdiscount/backoffice-ui';
import { path, pipe } from 'ramda';
import { Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Add from '@material-ui/icons/Add';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useCallback, useMemo, useState } from 'react';

import {
  RESET_DELETE_SCOPES_ERROR,
  RESET_DELETE_SCOPES_SUCCESS,
} from '../../components/ScopesDataGrid/actions';
import { sortBy } from '../../helpers';
import DeleteScopesConfirmationModal from '../../components/DeleteScopesConfirmationModal';
import paginate from '../../components/ScopesDataGrid/paginate';
import ScopesDataGrid from '../../components/ScopesDataGrid';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';
import useDataGridReducer from '../../components/ScopesDataGrid/useDataGridReducer';
import useScopes from './useScopes';

const ScopesManagement = () => {
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const { order, orderBy, page, rowsPerPage, selected } = useDataGridReducer();
  const { scopes } = useScopes();

  const rows = useMemo(() => pipe(sortBy(order, orderBy), paginate(page, rowsPerPage))(scopes), [
    scopes,
    order,
    orderBy,
    page,
    rowsPerPage,
  ]);
  const deleteStatus = useSelector(path(['navigation', 'scopes', 'deleteStatus']));

  const toggleDeletionModal = () => setDeletionModalOpen(!deletionModalOpen);

  const actions = [
    {
      icon: Delete,
      label: 'Supprimer les gammes sélectionnées',
      onClick: toggleDeletionModal,
      color: 'quaternary',
      disabled: selected.length === 0,
    },
  ];

  const dispatch = useDispatch();

  const onCloseErrorSnackbar = useCallback(() => dispatch({ type: RESET_DELETE_SCOPES_ERROR }), [dispatch]);
  const onShowSuccessSnackbar = useCallback(() => dispatch({ type: RESET_DELETE_SCOPES_SUCCESS }), [
    dispatch,
  ]);

  return (
    <Screen
      titlebar={
        <TitleBar
          title="Gestion des gammes"
          actions={[
            {
              id: 'new_scope_button',
              label: 'Créer une nouvelle gamme',
              icon: Add,
              size: 'large',
              href: '/scopes/create',
            },
          ]}
        />
      }
      bottombar={<Footer />}
    >
      <ScopesDataGrid actions={actions} rowCount={scopes.length} rows={rows} />
      <DeleteScopesConfirmationModal open={deletionModalOpen} toggle={toggleDeletionModal} />
      {deleteStatus.errorMessage && (
        <Snackbar open autoHideDuration={6000} onClose={onCloseErrorSnackbar}>
          <MuiAlert onClose={onCloseErrorSnackbar} severity="error">
            {deleteStatus.errorMessage}
          </MuiAlert>
        </Snackbar>
      )}
      {deleteStatus.scopesDeleteSuccess && (
        <Snackbar open autoHideDuration={6000} onClose={onShowSuccessSnackbar}>
          <MuiAlert onClose={onShowSuccessSnackbar} severity="success">
            La séléction a bien été supprimée
          </MuiAlert>
        </Snackbar>
      )}
      <ServerActionBackdrop />
    </Screen>
  );
};

export default ScopesManagement;
