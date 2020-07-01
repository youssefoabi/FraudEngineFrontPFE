import { pathOrNull } from '@cdiscount/ramda-utils';
import { prop } from 'ramda';
import React, { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';

import clientApi from '../../client-api';
import EngineScreen from '../EngineScreen';
import parseEngine from './parse';
import useSaveEditEngine from './useSaveEditEngine';

function EngineEdition() {
  const [engine, setEngine] = useState({});
  const { match } = useReactRouter();

  const { saveEditEngine } = useSaveEditEngine();

  useEffect(() => {
    const id = pathOrNull(['params', 'id'], match);
    clientApi()
      .fetchEngine(id)
      .then(prop('data'))
      .then(rawEngine => {
        setEngine(parseEngine(rawEngine));
      });
  }, [match]);

  return <EngineScreen engine={engine} action={saveEditEngine} title="édition" setEngine={setEngine} />;
}

export default EngineEdition;
