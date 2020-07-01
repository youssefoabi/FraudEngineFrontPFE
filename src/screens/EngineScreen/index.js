import { Button, Footer, Screen } from '@cdiscount/backoffice-ui';
import { func, shape, string } from 'prop-types';
import { pathOr } from 'ramda';
import { Save, Visibility } from '@material-ui/icons';
import React from 'react';

import EngineForm from '../../components/EngineForm';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';
import usePreviewEngine from './usePreviewEngine';

const EngineScreen = ({ engine, setEngine, action, title }) => {
  const { previewEngine } = usePreviewEngine();
  const name = pathOr('', ['name'], engine);
  const id = pathOr(null, ['id'], engine);

  return (
    <Screen
      titlebar={
        <TitleBar
          title={`${title} d'un Moteur de Recherche : ${name || ''}`}
          actions={[
            {
              id: 'preview_engine_button',
              label: 'Prévisualiser',
              icon: Visibility,
              size: 'large',
              onClick: () => previewEngine(id),
            },
            {
              id: 'save_engine_button',
              label: 'Enregistrer',
              icon: Save,
              size: 'large',
              onClick: () => action(engine),
            },
          ]}
        />
      }
      bottombar={
        <Footer>
          <Button
            onClick={() => action(engine)}
            startIcon={<Save />}
            size="large"
            color="tertiary"
            label="Enregistrer"
            variant="contained"
          />
        </Footer>
      }
    >
      <EngineForm engine={engine} setEngine={setEngine} />
      <ServerActionBackdrop />
    </Screen>
  );
};

EngineScreen.propTypes = {
  engine: shape({}),
  title: string,
  action: func,
  setEngine: func,
};

EngineScreen.defaultProps = {
  engine: null,
  title: '',
  action: Function.Prototype,
  setEngine: Function.Prototype,
};

export default EngineScreen;
