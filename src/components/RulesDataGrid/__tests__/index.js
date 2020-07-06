import { itRendersAllMutations } from '@cdiscount/jest-utils';

import RulesDataGrid from '../';

jest.mock('../useColumns', () => () => ({
  rules: [],
}));

jest.mock('use-react-router', () => () => ({ location: {}, history: { push: jest.fn() } }));

jest.mock('../useDataGridReducer', () => () => ({
  page: 2,
  rowsPerPage: 10,
  order: 'asc',
  orderBy: null,
  selected: [],
}));

describe(RulesDataGrid.name, () => {
  itRendersAllMutations(RulesDataGrid, [{ name: 'without props', props: {} }]);
});
