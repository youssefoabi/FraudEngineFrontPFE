import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import CriteriaManagement from '../';
import mockCriteria from '../__fixtures__';

jest.mock('../useCriteria', () => () => ({
  criteria: mockCriteria,
}));

jest.mock('../../../components/CriteriaDataGrid/useDataGridReducer', () => () => ({
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
      criteriaDeleteSuccess: true,
    })
    .mockReturnValueOnce({
      errorMessage: 'ERROR',
    })
    .mockReturnValueOnce({}),
}));

describe(CriteriaManagement.name, () => {
  beforeEach(() => jest.resetModules());

  describe('with criteriaDeleteSuccess', () => {
    itRendersCorrectly(<CriteriaManagement />);
  });

  describe('with errorMessage', () => {
    itRendersCorrectly(<CriteriaManagement />);
  });

  describe('with no Snackbar', () => {
    itRendersCorrectly(<CriteriaManagement />);
  });
});
