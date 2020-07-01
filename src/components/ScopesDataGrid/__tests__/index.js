import { itRendersAllMutations } from '@cdiscount/jest-utils';

import ScopesDataGrid from '../';

jest.mock('../useColumns', () => () => ({
  scopes: [],
}));

jest.mock('use-react-router', () => () => ({ location: {}, history: { push: jest.fn() } }));

jest.mock('../useDataGridReducer', () => () => ({
  page: 2,
  rowsPerPage: 10,
  order: 'asc',
  orderBy: null,
  selected: [],
}));

describe(ScopesDataGrid.name, () => {
  itRendersAllMutations(ScopesDataGrid, [{ name: 'without props', props: {} }]);
});
