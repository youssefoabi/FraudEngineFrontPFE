import { isNil } from 'ramda';
import { Link, Typography } from '@material-ui/core';
import { string } from 'prop-types';
import { useStyles } from '@cdiscount/backoffice-ui';
import React from 'react';

import styles from './styles';

const ScopeUrlField = ({ scopeUrl }) => {
  const classes = useStyles(styles);
  const handleClick = e => {
    if (isNil(scopeUrl)) return;
    if (!scopeUrl.startsWith('http')) {
      e.preventDefault();
    }
  };

  return (
    <Typography className={classes.linkTypography}>
      <Link
        href={scopeUrl}
        onClick={handleClick}
        rel="noopener noreferrer"
        target="_blank"
        className={classes.linkAnchor}
      >
        {scopeUrl}
      </Link>
    </Typography>
  );
};

ScopeUrlField.propTypes = {
  scopeUrl: string,
};

ScopeUrlField.defaultProps = {
  scopeUrl: null,
};

export default ScopeUrlField;
