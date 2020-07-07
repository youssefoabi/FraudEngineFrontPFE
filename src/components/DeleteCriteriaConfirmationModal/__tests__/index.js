import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import DeleteCriteriaConfirmationModal from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
  useSelector: jest
    .fn()
    .mockReturnValueOnce([])
    .mockReturnValueOnce([])
    .mockReturnValueOnce([1])
    .mockReturnValueOnce('criterion_1')
    .mockReturnValueOnce([1, 2])
    .mockReturnValueOnce('criterion_1, criterion_2'),
}));

describe(DeleteCriteriaConfirmationModal.name, () => {
  describe('without selected criteria', () => {
    itRendersCorrectly(<DeleteCriteriaConfirmationModal />);
  });

  describe('with select one criterion', () => {
    itRendersCorrectly(<DeleteCriteriaConfirmationModal />);
  });

  describe('with select more than one criterion', () => {
    itRendersCorrectly(<DeleteCriteriaConfirmationModal />);
  });
});
