import { Button, Footer, Screen } from '@cdiscount/backoffice-ui';
import { func, shape, string } from 'prop-types';
import { pathOr } from 'ramda';
import { Save } from '@material-ui/icons';
import React from 'react';

import EnginesGroupForm from '../../components/EnginesGroupForm';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';

const EnginesGroupScreen = ({ enginesGroup, setEnginesGroup, action, title }) => {
  const name = pathOr('', ['groupName'], enginesGroup);

  return (
    <Screen
      titlebar={
        <TitleBar
          title={`${title} d'un groupe de Moteurs : ${name || ''}`}
          actions={[
            {
              id: 'save_enginesGroup_button',
              label: 'Enregistrer',
              icon: Save,
              size: 'large',
              onClick: () => action(enginesGroup),
            },
          ]}
        />
      }
      bottombar={
        <Footer>
          <Button
            onClick={() => action(enginesGroup)}
            startIcon={<Save />}
            size="large"
            color="tertiary"
            label="Enregistrer"
            variant="contained"
          />
        </Footer>
      }
    >
      <EnginesGroupForm enginesGroup={enginesGroup} setEnginesGroup={setEnginesGroup} />
      <ServerActionBackdrop />
    </Screen>
  );
};

EnginesGroupScreen.propTypes = {
  enginesGroup: shape({}),
  title: string,
  action: func,
  setEnginesGroup: func,
};

EnginesGroupScreen.defaultProps = {
  enginesGroup: null,
  title: '',
  action: Function.Prototype,
  setEnginesGroup: Function.Prototype,
};

export default EnginesGroupScreen;
