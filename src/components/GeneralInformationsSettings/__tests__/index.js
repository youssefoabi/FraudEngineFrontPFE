import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import GeneralInformationsSettings from '../';

describe(GeneralInformationsSettings.name, () => {
  itRendersCorrectly(<GeneralInformationsSettings />);
});
