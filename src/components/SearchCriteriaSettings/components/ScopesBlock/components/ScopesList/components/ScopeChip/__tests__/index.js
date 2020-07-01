import { itRendersAllMutations } from '@cdiscount/jest-utils';

import ScopeChip from '../';

jest.resetModules();

jest.mock('../useScope', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      scope: { name: 'scope', scopeId: 1 },
      hasMissingParameters: true,
      onDelete: jest.fn(),
      onClick: jest.fn(),
      isEnabled: true,
    })
    .mockReturnValueOnce({
      scope: null,
    })
    .mockReturnValueOnce({
      scope: {},
    }),
  namedExport: 'useScope',
}));

const mutations = [
  { name: 'without props' },
  { name: 'with props' },
  { name: 'with null scope' },
  { name: 'with empty scope' },
];

describe(ScopeChip.name, () => {
  itRendersAllMutations(ScopeChip, mutations);
});
