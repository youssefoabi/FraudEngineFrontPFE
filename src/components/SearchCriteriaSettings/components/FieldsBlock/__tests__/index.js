import { itRendersAllMutations } from '@cdiscount/jest-utils';

import FieldsBlock from '../';

const mutations = [
  { name: 'without props', props: {} },
  { name: 'with fieldId null', props: { fieldId: null } },
  { name: 'with fieldId equal 1', props: { fieldId: 1 } },
];

describe(FieldsBlock.name, () => {
  itRendersAllMutations(FieldsBlock, mutations);
});
