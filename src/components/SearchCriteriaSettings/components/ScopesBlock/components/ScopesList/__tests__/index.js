import { itRendersAllMutations } from '@cdiscount/jest-utils';

import ScopesList from '../';

const mutations = [
  {
    name: 'with scopes',
    props: {
      engine: {
        scopes: {
          1: {
            scopeId: 1,
            name: 'scope 1',
            order: 0,
            isEnable: true,
          },
          2: {
            scopeId: 2,
            name: 'scope 2',
            order: 0,
            isEnable: true,
          },
        },
      },
    },
  },
  { name: 'with null scopes' },
];

describe(ScopesList.name, () => {
  itRendersAllMutations(ScopesList, mutations);
});
