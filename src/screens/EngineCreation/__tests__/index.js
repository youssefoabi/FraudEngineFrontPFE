import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import EngineCreation from '../';

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
}));

describe(EngineCreation.name, () => {
  itRendersCorrectly(<EngineCreation />);
});
