import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import ScopesBlock from '../';

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
  useSelector: () => ({}),
}));

describe(ScopesBlock.name, () => {
  itRendersCorrectly(<ScopesBlock />);
});
