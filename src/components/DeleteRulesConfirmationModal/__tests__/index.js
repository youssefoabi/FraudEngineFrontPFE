import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import DeleteRulesConfirmationModal from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
  useSelector: jest
    .fn()
    .mockReturnValueOnce([])
    .mockReturnValueOnce([])
    .mockReturnValueOnce([1])
    .mockReturnValueOnce('rule_1')
    .mockReturnValueOnce([1, 2])
    .mockReturnValueOnce('rule_1, rule_2'),
}));

describe(DeleteRulesConfirmationModal.name, () => {
  describe('without selected rules', () => {
    itRendersCorrectly(<DeleteRulesConfirmationModal />);
  });

  describe('with select one rule', () => {
    itRendersCorrectly(<DeleteRulesConfirmationModal />);
  });

  describe('with select more than one rule', () => {
    itRendersCorrectly(<DeleteRulesConfirmationModal />);
  });
});
