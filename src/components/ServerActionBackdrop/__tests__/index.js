import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import ServerActionBackdrop from '../';

jest.mock('react-redux', () => ({
  useSelector: () => ({}),
}));

describe(ServerActionBackdrop.name, () => {
  itRendersCorrectly(<ServerActionBackdrop />);
});
