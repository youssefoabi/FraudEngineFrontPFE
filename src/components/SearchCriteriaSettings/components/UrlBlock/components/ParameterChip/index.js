import { number, shape, string } from 'prop-types';
import { useStyles } from '@cdiscount/backoffice-ui';
import MuiChip from '@material-ui/core/Chip';
import React from 'react';

import styles from './styles';
import useParameter from './useParameter';

const ParameterChip = ({ scopeId, parameter, engine }) => {
  const { isLinkedParameter } = useParameter({
    engine,
    parameter,
    scopeId,
  });

  const classes = useStyles(styles);

  return (
    <MuiChip
      label={parameter}
      className={isLinkedParameter ? classes.statusLinkedChip : classes.statusNotLinkedChip}
    />
  );
};

ParameterChip.propTypes = {
  engine: shape({}),
  parameter: string,
  scopeId: number,
};

ParameterChip.defaultProps = {
  engine: null,
  parameter: null,
  scopeId: null,
};

export default ParameterChip;
