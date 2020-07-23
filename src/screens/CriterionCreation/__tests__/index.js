import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import CriterionCreation from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
}));

describe(CriterionCreation.name, () => {
  itRendersCorrectly(<CriterionCreation />);
});
