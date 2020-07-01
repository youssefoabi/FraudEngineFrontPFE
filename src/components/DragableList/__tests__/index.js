import { itRendersAllMutations } from '@cdiscount/jest-utils';

import DraggableList from '../';

const data = [
  {
    scopeId: 1,
    label: 'scope',
    order: 1,
  },
  {
    scopeId: 2,
    label: 'scope2',
    order: 2,
  },
];

const mutations = [
  {
    name: 'without props',
    props: {},
  },
  {
    name: 'with props',
    props: { data, renderItem: jest.fn, keyExtractor: jest.fn, onOrderChange: jest.fn },
  },
];

describe(DraggableList.name, () => {
  itRendersAllMutations(DraggableList, mutations);
});
