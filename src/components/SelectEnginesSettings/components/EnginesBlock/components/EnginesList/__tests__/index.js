import { itRendersAllMutations } from '@cdiscount/jest-utils';

import EnginesList from '../';

const mutations = [
  {
    name: 'with engines',
    props: {
      enginesGroup: {
        engines: {
          1: {
            engineId: 1,
            engineName: 'engine 1',
            order: 0,
            isEnable: true,
            engineLabel: 'engineLabel',
            pictogramUrl: 'pictogramUrl',
          },
          2: {
            engineId: 2,
            engineName: 'engine 2',
            order: 1,
            isEnable: true,
            engineLabel: 'engineLabel 2',
            pictogramUrl: 'pictogramUrl 2',
          },
        },
      },
    },
  },
  { name: 'with null engines' },
];

describe(EnginesList.name, () => {
  itRendersAllMutations(EnginesList, mutations);
});
