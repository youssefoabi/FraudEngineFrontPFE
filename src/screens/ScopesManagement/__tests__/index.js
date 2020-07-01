import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import ScopesManagement from '../';

jest.mock('../useScopes', () => () => ({
  scopes: [],
}));

jest.mock('../../../components/ScopesDataGrid/useDataGridReducer', () => () => ({
  page: 2,
  rowsPerPage: 10,
  order: 'asc',
  orderBy: null,
  selected: [],
}));

jest.mock('use-react-router', () => () => ({ history: { push: jest.fn() } }));
//deleteStatus.scopesDeleteSuccess
//deleteStatus.errorMessage

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
  useSelector: jest
    .fn()
    .mockReturnValueOnce({
      scopesDeleteSuccess: true,
    })
    .mockReturnValueOnce({
      errorMessage: 'ERROR',
    })
    .mockReturnValueOnce({}),
}));

describe(ScopesManagement.name, () => {
  beforeEach(() => jest.resetModules());

  describe('with scopesDeleteSuccess', () => {
    itRendersCorrectly(<ScopesManagement />);
  });

  describe('with errorMessage', () => {
    itRendersCorrectly(<ScopesManagement />);
  });

  describe('with no Snackbar', () => {
    itRendersCorrectly(<ScopesManagement />);
  });
});
