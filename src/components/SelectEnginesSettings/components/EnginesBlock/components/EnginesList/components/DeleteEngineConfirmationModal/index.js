import { bool, func, string } from 'prop-types';
import { isNilOrEmpty } from 'ramda-adjunct';
import { Typography } from '@material-ui/core';
import React from 'react';

import ConfirmationModal from '../../../../../../../ConfirmationModal';

export default function DeleteEngineConfirmationModal({ engineName, confirm, open, toggle }) {
  if (isNilOrEmpty(engineName)) return null;

  return (
    <ConfirmationModal isOpen={open} title="Suppression du moteur" toggle={toggle} confirm={confirm}>
      <Typography>{`Confirmez-vous la suppression du moteur  ${engineName} ?`}</Typography>
    </ConfirmationModal>
  );
}

DeleteEngineConfirmationModal.propTypes = {
  open: bool,
  toggle: func,
  engineName: string,
  confirm: func,
};

DeleteEngineConfirmationModal.defaultProps = {
  open: false,
  toggle: Function.prototype,
  engineName: null,
  confirm: Function.prototype,
};
