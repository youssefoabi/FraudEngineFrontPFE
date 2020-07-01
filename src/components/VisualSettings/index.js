import { DataEdit, ExpansionPanel, GridItem, useStyles } from '@cdiscount/backoffice-ui';
import { FormLabel, Grid } from '@material-ui/core';
import { func } from 'prop-types';
import { pathOr } from 'ramda';
import clsx from 'clsx';
import React from 'react';

import { AlternativeTextConfig, ImagesUrlConfig, MarketingTextConfig } from './config';
import { enginePropTypes } from '../EngineForm/enginePropTypes';
import styles from './styles';

const VisualSettings = ({ engine, handleChange }) => {
  const backgroundImages = pathOr([], ['backgroundImages'], engine);
  const backgroundImage = pathOr({}, [0], backgroundImages);
  const urlImageDesktop = pathOr('', ['urlImageDesktop'], backgroundImage);
  const urlImageMobile = pathOr('', ['urlImageMobile'], backgroundImage);

  const handleBackgroundImageChange = ({ id, value }) => {
    handleChange({
      id: 'backgroundImages',
      value: { ...backgroundImages, 0: { ...backgroundImage, [id]: value } },
    });
  };

  const classes = useStyles(styles, { urlImageDesktop, urlImageMobile });

  return (
    <ExpansionPanel title="Gestion du visuel">
      <Grid container direction="column">
        <div className={classes.headerSlider}>Slider d&apos;images de fond</div>
        <Grid container spacing={2}>
          <GridItem item xs={12} sm={12} md={3} xl={3}>
            <div className={classes.imagesWrapper}>
              <FormLabel>Aperçu PC</FormLabel>
              <div className={clsx(classes.imagePreview, classes.imageUrlDesktop)} alt="" />
              <FormLabel>Aperçu Mobile</FormLabel>
              <div className={clsx(classes.imagePreview, classes.imageUrlMobile)} alt="" />
            </div>
          </GridItem>
          <GridItem item xs={12} sm={12} md={9} xl={9}>
            <Grid>
              <DataEdit
                fields={ImagesUrlConfig}
                values={backgroundImage}
                onChange={handleBackgroundImageChange}
              />
            </Grid>
            <Grid>
              <DataEdit
                fields={AlternativeTextConfig}
                values={backgroundImage}
                onChange={handleBackgroundImageChange}
              />
            </Grid>
          </GridItem>
        </Grid>
        <br />
        <GridItem title="Parametrages des textes">
          <Grid item xs={12} md={12} lg={12}>
            <DataEdit fields={MarketingTextConfig} values={engine} onChange={handleChange} />
          </Grid>
        </GridItem>
      </Grid>
    </ExpansionPanel>
  );
};

VisualSettings.propTypes = {
  handleChange: func,
  engine: enginePropTypes,
};

VisualSettings.defaultProps = {
  handleChange: Function.prototype,
  engine: null,
};

export default VisualSettings;
