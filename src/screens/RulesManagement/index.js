import { Delete } from '@material-ui/icons';
import { Footer, Screen } from '@cdiscount/backoffice-ui';
import { path, pathOr, pipe } from 'ramda';
import { Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Add from '@material-ui/icons/AddBox';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useCallback, useMemo, useState } from 'react';

import { RESET_DELETE_RULES_ERROR, RESET_DELETE_RULES_SUCCESS } from '../../components/RulesDataGrid/actions';
import { sortBy } from '../../helpers';
import DeleteRulesConfirmationModal from '../../components/DeleteRulesConfirmationModal';
import paginate from '../../components/RulesDataGrid/paginate';
import RulesDataGrid from '../../components/RulesDataGrid';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';
import useDataGridReducer from '../../components/RulesDataGrid/useDataGridReducer';
import useRules from './useRules';

function RulesManagement() {
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const { order, orderBy, page, rowsPerPage, selected } = useDataGridReducer();
  const { rules } = useRules();

  const rows = useMemo(() => pipe(sortBy(order, orderBy), paginate(page, rowsPerPage))(rules), [
    rules,
    order,
    orderBy,
    page,
    rowsPerPage,
  ]);
  const deleteStatus = useSelector(path(['navigation', 'rules', 'deleteStatus']));

  const toggleDeletionModal = () => {
    setDeletionModalOpen(!deletionModalOpen);
  };

  const actions = [
    {
      icon: Delete,
      label: 'Supprimer les règles sélectionnés',
      onClick: toggleDeletionModal,
      color: 'quaternary',
      disabled: !selected ? false : selected.length === 0,
    },
  ];

  const dispatch = useDispatch();

  const onCloseErrorSnackbar = useCallback(() => dispatch({ type: RESET_DELETE_RULES_ERROR }), [dispatch]);
  const onShowSuccessSnackbar = useCallback(() => dispatch({ type: RESET_DELETE_RULES_SUCCESS }), [dispatch]);

  return (
    <Screen
      titlebar={
        <TitleBar
          title="GESTION DES RÈGLES"
          actions={[
            {
              id: 'new_rule_button',
              label: 'CRÉER UNE RÈGLE',
              icon: Add,
              size: 'large',
              href: '/rules/create',
            },
          ]}
        />
      }
      bottombar={<Footer />}
    >
      <RulesDataGrid actions={actions} rowCount={pathOr(0, ['length'], rules)} rows={rows} />
      <DeleteRulesConfirmationModal open={deletionModalOpen} toggle={toggleDeletionModal} />
      {deleteStatus.errorMessage && (
        <Snackbar open autoHideDuration={6000} onClose={onCloseErrorSnackbar}>
          <MuiAlert onClose={onCloseErrorSnackbar} severity="error">
            {deleteStatus.errorMessage}
          </MuiAlert>
        </Snackbar>
      )}
      {deleteStatus.rulesDeleteSuccess && (
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

export default RulesManagement;
