import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import Home from '../';

describe(Home.name, () => {
  itRendersCorrectly(<Home />);
});
