import React, { useState } from 'react';

import CriterionScreen from '../CriterionScreen';
import useCreateCriterion from './useCreateCriterion';

function CriterionCreation() {
  const [criterion, setCriterion] = useState({});

  const { createCriterion } = useCreateCriterion();

  return (
    <CriterionScreen
      criterion={criterion}
      action={createCriterion}
      title="Création"
      setCriterion={setCriterion}
    />
  );
}

export default CriterionCreation;
