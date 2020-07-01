import { func, node } from 'prop-types';
import { Modal } from '@cdiscount/backoffice-ui';
import React from 'react';

export default function ConfirmationModal({ children, confirm, toggle, ...props }) {
  function handleConfirm() {
    toggle();
    confirm();
  }

  return (
    <Modal
      actions={[
        {
          color: 'default',
          label: 'Non, Annuler',
          onClick: toggle,
          variant: 'contained',
          size: 'large',
        },
        {
          color: 'quaternary',
          label: 'Oui, Supprimer',
          onClick: handleConfirm,
          size: 'large',
          variant: 'contained',
        },
      ]}
      container={document.getElementById('root')}
      toggle={toggle}
      {...props}
    >
      {children}
    </Modal>
  );
}

ConfirmationModal.propTypes = {
  children: node,
  confirm: func,
  toggle: func,
};

ConfirmationModal.defaultProps = {
  children: null,
  confirm: Function.prototype,
  toggle: Function.prototype,
};
