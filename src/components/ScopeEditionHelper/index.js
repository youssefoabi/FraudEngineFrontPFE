import { DataEdit, GridItem, useStyles } from '@cdiscount/backoffice-ui';
import { forEach, pathOr, reduce } from 'ramda';
import { Link, Typography } from '@material-ui/core';
import React, { useMemo, useState } from 'react';

import { scopeShape } from '../ScopeDataEdit';
import parseParamsObjectsArray from './parse';
import styles from './styles';

const inputGenerator = params =>
  params?.map(p => ({
    columns: 7,
    id: p.id,
    defaultValue: '',
    type: 'input',
    label: p.name,
  }));

const ScopeEditionHelper = ({ scope }) => {
  const classes = useStyles(styles);

  const urlTemplate = pathOr('', ['urlTemplate'], scope);

  const params = useMemo(() => parseParamsObjectsArray(urlTemplate), [urlTemplate]);
  const fields = useMemo(() => inputGenerator(params), [params]);
  const values = {};
  useMemo(() => {
    if (params) {
      forEach(f => {
        values[f.id] = '';
      }, params);
    }
  }, [params, values]);

  const [valuesState, setValuesState] = useState(values);
  const onDataEditChange = ({ id, value }) => {
    setValuesState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const nUrl = useMemo(
    () =>
      reduce(
        (acc, value) => {
          const newValue = value.includes('=')
            ? value
                .replace('{', '')
                .replace('}', '')
                .concat(valuesState[value])
            : valuesState[value];
          return acc.replace(value, newValue);
        },
        urlTemplate,
        Object.keys(valuesState),
      ),
    [urlTemplate, valuesState],
  );

  return (
    <GridItem title="Aperçu de l'url" xs={12}>
      <Typography className={classes.linkTypography}>
        <Link
          href={nUrl}
          onClick={e => {
            if (!nUrl.startsWith('http')) {
              e.preventDefault();
            }
          }}
          rel="noopener noreferrer"
          target="_blank"
          className={classes.linkAnchor}
        >
          {nUrl}
        </Link>
      </Typography>
      <DataEdit fields={fields} onChange={onDataEditChange} values={valuesState} />
    </GridItem>
  );
};

ScopeEditionHelper.propTypes = {
  scope: scopeShape,
};

ScopeEditionHelper.defaultProps = {
  scope: null,
};

export default ScopeEditionHelper;
