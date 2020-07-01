import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import EnginesGroupCreation from '../';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
}));

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

describe(EnginesGroupCreation.name, () => {
  itRendersCorrectly(<EnginesGroupCreation />);
});
