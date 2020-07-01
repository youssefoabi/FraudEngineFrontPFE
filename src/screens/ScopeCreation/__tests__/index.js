import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import ScopeCreation from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
}));

describe(ScopeCreation.name, () => {
  itRendersCorrectly(<ScopeCreation />);
});
