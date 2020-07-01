import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import EngineScreen from '../';

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

describe(EngineScreen.name, () => {
  itRendersCorrectly(<EngineScreen />);
});
