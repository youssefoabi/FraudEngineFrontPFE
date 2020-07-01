import { itRendersAllMutations } from '@cdiscount/jest-utils';

import EngineChip from '../';

jest.resetModules();

jest.mock('../useEngine', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      engine: { engineName: 'engine', engineId: 1 },
      onDelete: jest.fn(),
      onClick: jest.fn(),
      isEnabled: true,
    })
    .mockReturnValueOnce({
      engine: null,
    })
    .mockReturnValueOnce({
      engine: {},
    }),
  namedExport: 'useEngine',
}));

const mutations = [
  { name: 'without props' },
  { name: 'with props' },
  { name: 'with null engine' },
  { name: 'with empty engine' },
];

describe(EngineChip.name, () => {
  itRendersAllMutations(EngineChip, mutations);
});
