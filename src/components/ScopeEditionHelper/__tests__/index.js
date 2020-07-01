import { itRendersAllMutations } from '@cdiscount/jest-utils';

import ScopeDataEdit from '../';

const mutations = [
  {
    name: 'without props',
    props: {},
  },
  {
    name: 'with scope',
    props: {
      scope: {
        name: 'scope name',
        // eslint-disable-next-line @cdiscount/cdiscount/relative-protocol
        urlTemplate: 'https://www.{cdiscount_env}.com/{path_var}?{query_param=}',
      },
    },
  },
];
describe(ScopeDataEdit.name, () => {
  itRendersAllMutations(ScopeDataEdit, mutations);
});
