import { func, number, shape } from 'prop-types';
import { isNilOrEmpty } from 'ramda-adjunct';
import { prop } from 'ramda';
import { useStyles } from '@cdiscount/backoffice-ui';
import clsx from 'clsx';
import MuiChip from '@material-ui/core/Chip';
import React, { useState } from 'react';

import DeleteEngineConfirmationModal from '../DeleteEngineConfirmationModal';
import styles from './styles';
import useEngine from './useEngine';

const EngineChip = ({ engineId, handleChange, enginesGroup }) => {
  const { onDelete, onClick, engine, isEnabled, idCurrentEngine } = useEngine({
    handleChange,
    enginesGroup,
    engineId,
  });
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const isCurrentEngine = engineId === idCurrentEngine;

  const toggleDeletionModal = () => {
    setDeletionModalOpen(!deletionModalOpen);
  };

  const classes = useStyles(styles);
  if (isNilOrEmpty(engine)) return null;

  return (
    <>
      <DeleteEngineConfirmationModal
        engineName={prop('engineName', engine)}
        confirm={() => onDelete(prop('engineId', engine))}
        open={deletionModalOpen}
        toggle={toggleDeletionModal}
      />
      <MuiChip
        label={prop('engineName', engine)}
        className={clsx(classes.baseStyle, {
          [classes.statusEnableCurrentChip]: isEnabled && isCurrentEngine,
          [classes.statusEnableChip]: isEnabled && !isCurrentEngine,
          [classes.statusDisableCurrentChip]: !isEnabled && isCurrentEngine,
          [classes.statusDisableChip]: !isEnabled && !isCurrentEngine,
        })}
        onDelete={() => toggleDeletionModal()}
        onClick={() => onClick(engine)}
      />
    </>
  );
};

EngineChip.propTypes = {
  enginesGroup: shape({}),
  engineId: number,
  handleChange: func,
};

EngineChip.defaultProps = {
  enginesGroup: null,
  engineId: null,
  handleChange: Function.Prototype,
};

export default EngineChip;
