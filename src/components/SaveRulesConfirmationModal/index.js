import { bool, func } from 'prop-types';
import { Typography } from '@material-ui/core';
import React from 'react';

import SaveConfirmationModal from '../SaveConfirmationModal';

export default function SaveRulesConfirmationModal({ confirm, open, toggle }) {
  return (
    <SaveConfirmationModal isOpen={open} title="Enregistrement de la règle" toggle={toggle} confirm={confirm}>
      <Typography>
        {`Nous estimons que cette règle arrêtera ${Math.floor(
          Math.random() * 20,
        )}% de flux de commandes (estimations sur les 7 derniers jours)`}
        <br />
        {`Confirmez-vous l'enregistrement de la règle `}
      </Typography>
    </SaveConfirmationModal>
  );
}

SaveRulesConfirmationModal.propTypes = {
  open: bool,
  toggle: func,
  confirm: func,
};

SaveRulesConfirmationModal.defaultProps = {
  open: false,
  toggle: Function.prototype,
  confirm: Function.prototype,
};
