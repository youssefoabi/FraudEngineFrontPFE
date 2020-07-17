import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import RuleForm from '../';

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

describe(RuleForm.name, () => {
  describe('with error', () => {
    itRendersCorrectly(<RuleForm />);
  });
  describe('with success', () => {
    itRendersCorrectly(<RuleForm />);
  });
  describe('without Snackbar', () => {
    itRendersCorrectly(<RuleForm />);
  });
});
