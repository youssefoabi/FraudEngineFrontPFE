import { pathOrNull } from '@cdiscount/ramda-utils';
import { prop } from 'ramda';
import React, { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';

import clientApi from '../../client-api';
import CriterionScreen from '../CriterionScreen';
import parseCriterion from './parse';
import useSaveEditCriterion from './useSaveEditCriterion';

function CriterionEdition() {
  const [criterion, setCriterion] = useState({});
  const { match } = useReactRouter();

  const { saveEditCriterion } = useSaveEditCriterion();

  useEffect(() => {
    const id = pathOrNull(['params', 'id'], match);
    clientApi()
      .fetchCriterion(id)
      .then(prop('data'))
      .then(rawCriterion => {
        setCriterion(parseCriterion(rawCriterion));
      });
  }, [match]);

  return (
    <CriterionScreen
      criterion={criterion}
      action={saveEditCriterion}
      title="édition"
      setCriterion={setCriterion}
    />
  );
}

export default CriterionEdition;
