import { itRendersAllMutations } from '@cdiscount/jest-utils';

import ScopeUrlField from '../';

const mutations = [
  { name: 'without props', props: {} },
  { name: 'with scopeurl', props: { scopeUrl: 'https://www.{cdiscount_env}.com/{path_var}?{query_param=}' } },
];

describe(ScopeUrlField.name, () => {
  itRendersAllMutations(ScopeUrlField, mutations);
});
