import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import ScopeForm from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
  useSelector: jest
    .fn()
    .mockReturnValueOnce({
      errorMessage: 'ERROR',
    })
    .mockReturnValueOnce({
      scopeSaveSuccess: false,
    })
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      scopeSaveSuccess: true,
    }),
}));

describe(ScopeForm.name, () => {
  describe('with error', () => {
    itRendersCorrectly(<ScopeForm />);
  });
  describe('with success', () => {
    itRendersCorrectly(<ScopeForm />);
  });
  describe('without Snackbar', () => {
    itRendersCorrectly(<ScopeForm />);
  });
});
