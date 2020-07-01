import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import EnginesGroupForm from '../';

jest.mock('react-beautiful-dnd', () => ({
  Droppable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {},
    ),
  Draggable: ({ children }) =>
    children(
      {
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {},
    ),
  DragDropContext: ({ children }) => children,
}));

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

describe(EnginesGroupForm.name, () => {
  describe('with error', () => {
    itRendersCorrectly(<EnginesGroupForm />);
  });
  describe('with success', () => {
    itRendersCorrectly(<EnginesGroupForm />);
  });
  describe('without Snackbar', () => {
    itRendersCorrectly(<EnginesGroupForm />);
  });
});
