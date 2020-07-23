import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import CriterionInformationsSettings from '../';

describe(CriterionInformationsSettings.name, () => {
  itRendersCorrectly(<CriterionInformationsSettings />);
});
