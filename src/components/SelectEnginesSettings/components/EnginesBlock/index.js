import { Button, DataEdit, GridItem, useStyles } from '@cdiscount/backoffice-ui';
import { func, shape } from 'prop-types';
import Add from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import EnginesList from './components/EnginesList';
import styles from './styles';
import useEngines from './useEngines';

const EnginesBlock = ({ enginesGroup, handleChange }) => {
  const { handleSelectEngine, engines: allEngines, addEngine } = useEngines({
    handleChange,
    enginesGroup,
  });
  const classes = useStyles(styles);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4} lg={4}>
          <DataEdit
            fields={[
              {
                id: 'selectedEngine',
                type: 'select',
                label: 'Moteur',
                selectProps: {
                  options: allEngines,
                },
              },
            ]}
            values={enginesGroup}
            onChange={handleSelectEngine}
          />
        </Grid>
        <GridItem xs={6} md={3} lg={3}>
          <Button
            className={classes.ButtonWrapper}
            size="large"
            icon={Add}
            color="tertiary"
            variant="contained"
            label="AJOUTER UN ONGLET"
            onClick={addEngine}
          />
        </GridItem>
      </Grid>
      <EnginesList enginesGroup={enginesGroup} handleChange={handleChange} />
    </>
  );
};

EnginesBlock.propTypes = {
  enginesGroup: shape({}),
  handleChange: func,
};

EnginesBlock.defaultProps = {
  enginesGroup: null,
  handleChange: Function.Prototype,
};

export default EnginesBlock;
