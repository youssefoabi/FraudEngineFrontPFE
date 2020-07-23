import { itRendersAllMutations } from '@cdiscount/jest-utils';

import CriteriaDataGrid from '../';

jest.mock('../useColumns', () => () => ({
  criteria: [],
}));

jest.mock('use-react-router', () => () => ({ location: {}, history: { push: jest.fn() } }));

jest.mock('../useDataGridReducer', () => () => ({
  page: 2,
  rowsPerPage: 10,
  order: 'asc',
  orderBy: null,
  selected: [],
}));

describe(CriteriaDataGrid.name, () => {
  itRendersAllMutations(CriteriaDataGrid, [{ name: 'without props', props: {} }]);
});
