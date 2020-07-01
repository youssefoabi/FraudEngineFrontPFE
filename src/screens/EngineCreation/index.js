import React, { useState } from 'react';

import EngineScreen from '../EngineScreen';
import useCreateEngine from './useCreateEngine';

const initialState = {
  isEnable: false,
  inputFields: {
    0: {
      id: 0,
      isEnable: false,
      isMandatory: false,
      parameters: [],
    },
    1: {
      id: 1,
      isEnable: false,
      isMandatory: false,
      parameters: [],
    },
  },
  backgroundImages: {
    0: { isEnable: false, openInNewTab: false },
  },
  isMarketingTextEnable: false,
};

function EngineCreation() {
  const [engine, setEngine] = useState(initialState);

  const { createEngine } = useCreateEngine();

  return <EngineScreen engine={engine} action={createEngine} title="Création" setEngine={setEngine} />;
}

export default EngineCreation;
