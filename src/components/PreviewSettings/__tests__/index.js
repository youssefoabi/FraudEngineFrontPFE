import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import PreviewSettings from '../';

describe(PreviewSettings.name, () => {
  itRendersCorrectly(<PreviewSettings />);
});
