import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import DeleteScopesConfirmationModal from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
  useSelector: () => ({}),
}));

describe(DeleteScopesConfirmationModal.name, () => {
  itRendersCorrectly(<DeleteScopesConfirmationModal />);
});
