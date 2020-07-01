import { Button, Footer, Screen } from '@cdiscount/backoffice-ui';
import { pathOr, prop } from 'ramda';
import { pathOrNull } from '@cdiscount/ramda-utils';
import { Save } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';

import clientApi from '../../client-api';
import parseScope from './parse';
import ScopeForm from '../../components/ScopeForm';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';
import useSaveEditScope from './useSaveEditScope';

function ScopeEdition() {
  const [scope, setScope] = useState();
  const { match } = useReactRouter();

  const { saveEditScope } = useSaveEditScope();

  useEffect(() => {
    const id = pathOrNull(['params', 'id'], match);
    clientApi()
      .getScope(id)
      .then(prop('data'))
      .then(rawScope => {
        setScope(parseScope(rawScope));
      });
  }, [match]);

  const name = pathOr('', ['name'], scope);

  return (
    <Screen
      titlebar={
        <TitleBar
          title={`Edition de la gamme : ${name}`}
          actions={[
            {
              id: 'save_scope_button',
              label: 'Enregistrer',
              icon: Save,
              size: 'large',
              onClick: () => saveEditScope(scope),
            },
          ]}
        />
      }
      bottombar={
        <Footer>
          <Button
            onClick={() => saveEditScope(scope)}
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

export default ScopeEdition;
