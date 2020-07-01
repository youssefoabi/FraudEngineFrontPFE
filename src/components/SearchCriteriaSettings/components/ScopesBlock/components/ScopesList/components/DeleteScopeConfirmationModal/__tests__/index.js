import { itRendersAllMutations } from '@cdiscount/jest-utils';

import DeleteScopeConfirmationModal from '../';

const mutations = [
  { name: 'with scopes', props: { name: 'scope', confirm: jest.fn(), open: true, toggle: jest.fn() } },
  { name: 'without props' },
];

describe(DeleteScopeConfirmationModal.name, () => {
  itRendersAllMutations(DeleteScopeConfirmationModal, mutations);
});
