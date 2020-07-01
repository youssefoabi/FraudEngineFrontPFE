import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import EnginesManagement from '../';
import mockEngines from '../__fixtures__';

jest.mock('../useEngines', () => () => ({
  engines: mockEngines,
}));

jest.mock('../../../components/EnginesDataGrid/useDataGridReducer', () => () => ({
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
      enginesDeleteSuccess: true,
    })
    .mockReturnValueOnce({
      errorMessage: 'ERROR',
    })
    .mockReturnValueOnce({}),
}));

describe(EnginesManagement.name, () => {
  beforeEach(() => jest.resetModules());

  describe('with enginesDeleteSuccess', () => {
    itRendersCorrectly(<EnginesManagement />);
  });

  describe('with errorMessage', () => {
    itRendersCorrectly(<EnginesManagement />);
  });

  describe('with no Snackbar', () => {
    itRendersCorrectly(<EnginesManagement />);
  });
});
