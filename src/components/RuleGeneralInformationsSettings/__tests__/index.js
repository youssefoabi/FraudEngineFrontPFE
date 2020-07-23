import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import RuleGeneralInformationsSettings from '../';

describe(RuleGeneralInformationsSettings.name, () => {
  itRendersCorrectly(<RuleGeneralInformationsSettings />);
});
