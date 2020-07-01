import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import EngineForm from '../';

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

describe(EngineForm.name, () => {
  describe('with error', () => {
    itRendersCorrectly(<EngineForm />);
  });
  describe('with success', () => {
    itRendersCorrectly(<EngineForm />);
  });
  describe('without Snackbar', () => {
    itRendersCorrectly(<EngineForm />);
  });
});
