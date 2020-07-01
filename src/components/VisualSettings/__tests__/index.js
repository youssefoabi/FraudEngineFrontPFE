import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import VisualSettings from '../';

describe(VisualSettings.name, () => {
  itRendersCorrectly(<VisualSettings />);
});
