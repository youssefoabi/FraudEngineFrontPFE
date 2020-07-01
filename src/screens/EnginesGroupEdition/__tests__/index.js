import { itRendersAllMutations } from '@cdiscount/jest-utils';

import clientApi from '../../../client-api';
import EnginesGroupEdition from '../';

jest.mock('../../../client-api');

beforeEach(() => {
  clientApi.mockClear();
});

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
}));

jest.mock('use-react-router', () => () => ({ match: {} }));

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

describe(EnginesGroupEdition.name, () => {
  itRendersAllMutations(EnginesGroupEdition, [{ name: 'without props', props: {} }]);
});
