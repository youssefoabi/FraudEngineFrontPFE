import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import mockRules from '../__fixtures__';
import RulesManagement from '../';

jest.mock('../useRules', () => () => ({
  rules: mockRules,
}));

jest.mock('../../../components/RulesDataGrid/useDataGridReducer', () => () => ({
  page: 2,
  rowsPerPage: 10,
  order: 'asc',
  orderBy: null,
  selected: [],
}));

jest.mock('use-react-router', () => () => ({ history: { push: jest.fn() } }));

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
  useSelector: jest
    .fn()
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      rulesDeleteSuccess: true,
    })
    .mockReturnValueOnce({
      errorMessage: 'ERROR',
    })
    .mockReturnValueOnce({}),
}));

describe(RulesManagement.name, () => {
  beforeEach(() => jest.resetModules());

  describe('with rulesDeleteSuccess', () => {
    itRendersCorrectly(<RulesManagement />);
  });

  describe('with errorMessage', () => {
    itRendersCorrectly(<RulesManagement />);
  });

  describe('with no Snackbar', () => {
    itRendersCorrectly(<RulesManagement />);
  });
});
