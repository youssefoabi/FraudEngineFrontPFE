import { itRendersAllMutations } from '@cdiscount/jest-utils';

import EnginesDataGrid from '../';

jest.mock('../useColumns', () => () => ({
  engines: [],
}));

jest.mock('use-react-router', () => () => ({ location: {}, history: { push: jest.fn() } }));

jest.mock('../useDataGridReducer', () => () => ({
  page: 2,
  rowsPerPage: 10,
  order: 'asc',
  orderBy: null,
  selected: [],
}));

describe(EnginesDataGrid.name, () => {
  itRendersAllMutations(EnginesDataGrid, [{ name: 'without props', props: {} }]);
});
