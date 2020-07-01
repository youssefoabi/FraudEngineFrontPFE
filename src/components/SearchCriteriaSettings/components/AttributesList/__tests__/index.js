import { itRendersAllMutations } from '@cdiscount/jest-utils';

import AttributesList from '../';

jest.resetModules();

jest.mock('../useAttributes', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      mappedAttributes: [],
    })
    .mockReturnValueOnce({
      mappedAttributes: null,
    })
    .mockReturnValueOnce({
      mappedAttributes: [
        { label: 'search', value: { id: 3, scopeId: 2, key: 'search', externalCodeId: 1 } },
        { label: 'cp', value: { id: 0, scopeId: 1, key: 'cp', externalCodeId: 2 } },
        { label: 'commune', value: { id: 1, scopeId: 1, key: 'commune', externalCodeId: 4 } },
      ],
      onChangeExternalCodeId: jest.fn(),
      onHandleAttribute: jest.fn(),
      onDelete: jest.fn(),
      addAttribute: jest.fn(),
      onHandleKey: jest.fn(),
      onHandleExternalKey: jest.fn(),
    }),
  namedExport: 'useAttributes',
}));

const mutations = [
  { name: 'without props' },
  { name: 'with empty mappedAttributes' },
  { name: 'with null mapedAttribute' },
  { name: 'with mapedAttribute' },
];

describe(AttributesList.name, () => {
  itRendersAllMutations(AttributesList, mutations);
});
