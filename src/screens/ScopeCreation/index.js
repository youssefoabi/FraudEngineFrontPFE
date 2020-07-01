import { Button, Footer, Screen } from '@cdiscount/backoffice-ui';
import { Save } from '@material-ui/icons';
import React, { useState } from 'react';

import ScopeForm from '../../components/ScopeForm';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';
import useSaveCreateScope from './useSaveCreateScope';

function ScopeCreation() {
  const initialScope = {
    id: null,
    name: '',
    urlTemplate: '',
    modifiedAt: null,
  };

  const [scope, setScope] = useState(initialScope);
  const { saveCreateScope } = useSaveCreateScope();

  return (
    <Screen
      titlebar={
        <TitleBar
          title="Création d'une gamme"
          actions={[
            {
              id: 'save_scope_button',
              label: 'Enregistrer',
              icon: Save,
              size: 'large',
              onClick: () => saveCreateScope(scope),
            },
          ]}
        />
      }
      bottombar={
        <Footer>
          <Button
            onClick={() => saveCreateScope(scope)}
            startIcon={<Save />}
            size="large"
            color="tertiary"
            label="Enregistrer"
            variant="contained"
          />
        </Footer>
      }
    >
      <ScopeForm scope={scope} setScope={setScope} />
      <ServerActionBackdrop />
    </Screen>
  );
}

export default ScopeCreation;
