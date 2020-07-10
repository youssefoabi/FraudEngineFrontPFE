import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import CriterionScreen from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
}));

describe(CriterionScreen.name, () => {
  itRendersCorrectly(<CriterionScreen />);
});
