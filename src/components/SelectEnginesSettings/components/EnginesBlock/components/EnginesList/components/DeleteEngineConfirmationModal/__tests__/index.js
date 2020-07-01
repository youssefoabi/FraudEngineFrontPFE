import { itRendersAllMutations } from '@cdiscount/jest-utils';

import DeleteEngineConfirmationModal from '../';

const mutations = [
  {
    name: 'with engines',
    props: { engineName: 'engine', confirm: jest.fn(), open: true, toggle: jest.fn() },
  },
  { name: 'without props' },
];

describe(DeleteEngineConfirmationModal.name, () => {
  itRendersAllMutations(DeleteEngineConfirmationModal, mutations);
});
