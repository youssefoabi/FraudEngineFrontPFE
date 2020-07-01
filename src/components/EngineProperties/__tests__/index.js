import { itRendersAllMutations } from '@cdiscount/jest-utils';

import EngineProperties from '../';

jest.resetModules();

jest.mock('../useEngineProperties', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValueOnce({})
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      engineName: 'engine name',
    }),
  namedExport: 'useEngineProperties',
}));

const mutations = [
  { name: 'without props' },
  { name: 'with props and without engineName', props: { enginesGroup: { currentEngine: { engineId: 1 } } } },
  { name: 'with props and engineName', props: { enginesGroup: { currentEngine: { engineId: 1 } } } },
];

describe(EngineProperties.name, () => {
  itRendersAllMutations(EngineProperties, mutations);
});
