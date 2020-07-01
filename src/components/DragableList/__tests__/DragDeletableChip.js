import { itRendersAllMutations } from '@cdiscount/jest-utils';
import React from 'react';

import DragDeletableChip from '../DragDeletableChip';

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

const mutations = [
  {
    name: 'without props',
    props: {},
  },
  {
    name: 'with props',
    props: { children: <div>item </div>, position: 2, id: 1 },
  },
];

describe(DragDeletableChip.name, () => {
  itRendersAllMutations(DragDeletableChip, mutations);
});
