import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import HomeNavigation from '../';

describe(HomeNavigation.name, () => {
  itRendersCorrectly(<HomeNavigation />);
});
