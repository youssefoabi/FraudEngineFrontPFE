import { Delete } from '@material-ui/icons';
import { Footer, Screen } from '@cdiscount/backoffice-ui';
import { path, pathOr, pipe } from 'ramda';
import { Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Add from '@material-ui/icons/AddBox';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useCallback, useMemo, useState } from 'react';

import {
  RESET_DELETE_ENGINES_ERROR,
  RESET_DELETE_ENGINES_SUCCESS,
} from '../../components/EnginesDataGrid/actions';
import { sortBy } from '../../helpers';
import DeleteEnginesConfirmationModal from '../../components/DeleteEnginesConfirmationModal';
import EnginesDataGrid from '../../components/EnginesDataGrid';
import paginate from '../../components/EnginesDataGrid/paginate';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';
import useDataGridReducer from '../../components/EnginesDataGrid/useDataGridReducer';
import useEngines from './useEngines';

function EnginesManagement() {
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const { order, orderBy, page, rowsPerPage, selected } = useDataGridReducer();
  const { engines } = useEngines();

  const rows = useMemo(() => pipe(sortBy(order, orderBy), paginate(page, rowsPerPage))(engines), [
    engines,
    order,
    orderBy,
    page,
    rowsPerPage,
  ]);
  const deleteStatus = useSelector(path(['navigation', 'engines', 'deleteStatus']));

  const toggleDeletionModal = () => {
    setDeletionModalOpen(!deletionModalOpen);
  };

  const actions = [
    {
      icon: Delete,
      label: 'Supprimer les moteurs sélectionnés',
      onClick: toggleDeletionModal,
      color: 'quaternary',
      disabled: !selected ? false : selected.length === 0,
    },
  ];

  const dispatch = useDispatch();

  const onCloseErrorSnackbar = useCallback(() => dispatch({ type: RESET_DELETE_ENGINES_ERROR }), [dispatch]);
  const onShowSuccessSnackbar = useCallback(() => dispatch({ type: RESET_DELETE_ENGINES_SUCCESS }), [
    dispatch,
  ]);

  return (
    <Screen
      titlebar={
        <TitleBar
          title="GESTION DES MOTEURS DE RECHERCHE"
          actions={[
            {
              id: 'new_engine_button',
              label: 'CRÉER UN MOTEUR DE RECHERCHE',
              icon: Add,
              size: 'large',
              href: '/engines/create',
            },
          ]}
        />
      }
      bottombar={<Footer />}
    >
      <EnginesDataGrid actions={actions} rowCount={pathOr(0, ['length'], engines)} rows={rows} />
      <DeleteEnginesConfirmationModal open={deletionModalOpen} toggle={toggleDeletionModal} />
      {deleteStatus.errorMessage && (
        <Snackbar open autoHideDuration={6000} onClose={onCloseErrorSnackbar}>
          <MuiAlert onClose={onCloseErrorSnackbar} severity="error">
            {deleteStatus.errorMessage}
          </MuiAlert>
        </Snackbar>
      )}
      {deleteStatus.enginesDeleteSuccess && (
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

export default EnginesManagement;
