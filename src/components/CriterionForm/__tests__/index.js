import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import CriterionForm from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
  useSelector: jest
    .fn()
    .mockReturnValueOnce('ERROR')
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false),
}));

describe(CriterionForm.name, () => {
  describe('with error', () => {
    itRendersCorrectly(<CriterionForm />);
  });
  describe('with success', () => {
    itRendersCorrectly(<CriterionForm />);
  });
  describe('without Snackbar', () => {
    itRendersCorrectly(<CriterionForm />);
  });
});
