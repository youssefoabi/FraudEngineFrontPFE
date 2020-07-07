import { pathOrNull } from '@cdiscount/ramda-utils';
import { prop } from 'ramda';
import React, { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';

import clientApi from '../../client-api';
import parseRule from './parse';
import RuleScreen from '../RuleScreen';
import useSaveEditRule from './useSaveEditRule';

function RuleEdition() {
  const [rule, setRule] = useState({});
  const { match } = useReactRouter();

  const { saveEditRule } = useSaveEditRule();

  useEffect(() => {
    const id = pathOrNull(['params', 'id'], match);
    clientApi()
      .fetchRule(id)
      .then(prop('data'))
      .then(rawRule => {
        setRule(parseRule(rawRule));
      });
  }, [match]);

  return <RuleScreen rule={rule} action={saveEditRule} title="édition" setRule={setRule} />;
}

export default RuleEdition;
