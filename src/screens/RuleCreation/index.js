import React, { useState } from 'react';

import RuleScreen from '../RuleScreen';
import useCreateRule from './useCreateRule';

const initialState = {
  isEnable: false,
  isValidated: false,
  isActivated: false,
};

function RuleCreation() {
  const [rule, setRule] = useState(initialState);

  const { createRule } = useCreateRule();

  return <RuleScreen rule={rule} action={createRule} title="Création" setRule={setRule} />;
}

export default RuleCreation;
