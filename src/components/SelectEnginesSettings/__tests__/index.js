import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import SelectEnginesSettings from '../';

jest.mock('react-global-configuration');

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

describe(SelectEnginesSettings.name, () => {
  itRendersCorrectly(<SelectEnginesSettings />);
});
