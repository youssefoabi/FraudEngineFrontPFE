import { func, number, shape } from 'prop-types';
import { isNilOrEmpty } from 'ramda-adjunct';
import { prop } from 'ramda';
import { useStyles } from '@cdiscount/backoffice-ui';
import clsx from 'clsx';
import MuiChip from '@material-ui/core/Chip';
import React, { useState } from 'react';

import DeleteScopeConfirmationModal from '../DeleteScopeConfirmationModal';
import styles from './styles';
import useScope from './useScope';

const ScopeChip = ({ id, handleChange, engine }) => {
  const { hasMissingParameters, onDelete, onClick, scope, isEnabled, idCurrentScope } = useScope({
    handleChange,
    engine,
    id,
  });
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const isCurrentScope = id === idCurrentScope;

  const toggleDeletionModal = () => {
    setDeletionModalOpen(!deletionModalOpen);
  };

  const classes = useStyles(styles);
  if (isNilOrEmpty(scope)) return null;

  return (
    <>
      <DeleteScopeConfirmationModal
        name={prop('name', scope)}
        confirm={() => onDelete(prop('scopeId', scope))}
        open={deletionModalOpen}
        toggle={toggleDeletionModal}
      />
      <MuiChip
        label={prop('name', scope)}
        className={clsx(classes.baseStyle, {
          [classes.statusValidChip]: isEnabled && !hasMissingParameters && !isCurrentScope,
          [classes.statusValidCurrentChip]: isEnabled && !hasMissingParameters && isCurrentScope,
          [classes.statusEnableChip]: isEnabled && hasMissingParameters && !isCurrentScope,
          [classes.statusEnableCurrentChip]: isEnabled && hasMissingParameters && isCurrentScope,
          [classes.statusDisableChip]: !isEnabled && !isCurrentScope,
          [classes.statusDisableCurrentChip]: !isEnabled && isCurrentScope,
        })}
        onDelete={() => toggleDeletionModal()}
        onClick={() => onClick(scope)}
      />
    </>
  );
};

ScopeChip.propTypes = {
  engine: shape({}),
  id: number,
  handleChange: func,
};

ScopeChip.defaultProps = {
  engine: null,
  id: null,
  handleChange: Function.Prototype,
};

export default ScopeChip;
