import { itRendersAllMutations } from '@cdiscount/jest-utils';

import clientApi from '../../../client-api';
import EngineEdition from '../';

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

jest.mock('../../../client-api');

beforeEach(() => {
  clientApi.mockClear();
});

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
}));

jest.mock('use-react-router', () => () => ({ match: {} }));

describe(EngineEdition.name, () => {
  itRendersAllMutations(EngineEdition, [{ name: 'without props', props: {} }]);
});
