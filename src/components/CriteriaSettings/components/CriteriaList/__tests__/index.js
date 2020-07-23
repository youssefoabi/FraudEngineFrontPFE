import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import CriteriaList from '../';

describe(CriteriaList.name, () => {
  itRendersCorrectly(<CriteriaList />);
});
