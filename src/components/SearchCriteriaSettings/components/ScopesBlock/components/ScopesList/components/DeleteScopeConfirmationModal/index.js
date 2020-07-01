import { bool, func, string } from 'prop-types';
import { isNilOrEmpty } from 'ramda-adjunct';
import { Typography } from '@material-ui/core';
import React from 'react';

import ConfirmationModal from '../../../../../../../ConfirmationModal';

export default function DeleteEnginesConfirmationModal({ name, confirm, open, toggle }) {
  if (isNilOrEmpty(name)) return null;

  return (
    <ConfirmationModal isOpen={open} title="Suppression de la gamme" toggle={toggle} confirm={confirm}>
      <Typography>{`Confirmez-vous la suppression de la gamme  ${name} ?`}</Typography>
    </ConfirmationModal>
  );
}

DeleteEnginesConfirmationModal.propTypes = {
  open: bool,
  toggle: func,
  name: string,
  confirm: func,
};

DeleteEnginesConfirmationModal.defaultProps = {
  open: false,
  toggle: Function.prototype,
  name: null,
  confirm: Function.prototype,
};
