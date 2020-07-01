import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import DeleteEnginesConfirmationModal from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
  useSelector: jest
    .fn()
    .mockReturnValueOnce([])
    .mockReturnValueOnce([])
    .mockReturnValueOnce([1])
    .mockReturnValueOnce('engine_1')
    .mockReturnValueOnce([1, 2])
    .mockReturnValueOnce('engine_1, engine_2'),
}));

describe(DeleteEnginesConfirmationModal.name, () => {
  describe('without selected engines', () => {
    itRendersCorrectly(<DeleteEnginesConfirmationModal />);
  });

  describe('with select one engine', () => {
    itRendersCorrectly(<DeleteEnginesConfirmationModal />);
  });

  describe('with select more than one engine', () => {
    itRendersCorrectly(<DeleteEnginesConfirmationModal />);
  });
});
