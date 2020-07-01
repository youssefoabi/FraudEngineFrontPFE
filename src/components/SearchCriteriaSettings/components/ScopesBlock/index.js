import { Button, DataEdit, GridItem, useStyles } from '@cdiscount/backoffice-ui';
import { func, shape } from 'prop-types';
import Add from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import ScopesList from './components/ScopesList';
import styles from './styles';
import useScopes from './useScopes';

const ScopesBlock = ({ engine, handleChange }) => {
  const { handleSelectScope, scopes: allScopes, addScope } = useScopes({
    handleChange,
    engine,
  });
  const classes = useStyles(styles);

  return (
    <>
      <GridItem title="Choix des gammes">
        <Grid container spacing={3}>
          <Grid item xs={6} md={4} lg={4}>
            <DataEdit
              fields={[
                {
                  id: 'selectedScope',
                  type: 'select',
                  label: 'Gamme 1',
                  selectProps: {
                    options: allScopes,
                  },
                },
              ]}
              values={engine}
              onChange={handleSelectScope}
            />
          </Grid>
          <GridItem xs={6} md={3} lg={3}>
            <Button
              className={classes.ButtonWrapper}
              size="large"
              icon={Add}
              color="tertiary"
              variant="contained"
              label="AJOUTER UNE GAMME"
              onClick={addScope}
            />
          </GridItem>
        </Grid>
        <ScopesList engine={engine} handleChange={handleChange} />
      </GridItem>
    </>
  );
};

ScopesBlock.propTypes = {
  engine: shape({}),
  handleChange: func,
};

ScopesBlock.defaultProps = {
  engine: null,
  handleChange: Function.Prototype,
};

export default ScopesBlock;
