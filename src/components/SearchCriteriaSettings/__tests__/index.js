import { itRendersAllMutations } from '@cdiscount/jest-utils';

import SearchCriteriaSettings from '../';

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

jest.resetModules();

jest.mock('../../../screens/ScopesManagement/useScopes', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      scopes: [],
    })
    .mockReturnValueOnce({
      scopes: null,
    })
    .mockReturnValueOnce({
      scopes: [
        {
          id: 1,
          name: 'string1',
          urlTemplate: 'stringC',
          modifiedAt: '2020-04-10T13:17:19.323Z',
        },
        {
          id: 2,
          name: 'string2',
          urlTemplate: 'stringA',
          modifiedAt: '2020-04-11T13:17:19.323Z',
        },
        {
          id: 3,
          name: 'string3',
          urlTemplate: 'stringB',
          modifiedAt: '2020-04-09T13:17:19.323Z',
        },
      ],
    }),
  namedExport: 'useScopes',
}));

const mutations = [
  { name: 'without props' },
  { name: 'with empty scopes' },
  { name: 'with null scopes' },
  {
    name: 'with scopes & props',
    props: {
      engine: {
        currentScope: { scopeId: 1 },
        inputFields: {
          0: { type: 'Address' },
          1: { type: 'Numeric' },
        },
      },
    },
  },
];

describe(SearchCriteriaSettings.name, () => {
  itRendersAllMutations(SearchCriteriaSettings, mutations);
});
