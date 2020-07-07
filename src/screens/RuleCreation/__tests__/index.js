import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import RuleCreation from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
}));

describe(RuleCreation.name, () => {
  itRendersCorrectly(<RuleCreation />);
});
