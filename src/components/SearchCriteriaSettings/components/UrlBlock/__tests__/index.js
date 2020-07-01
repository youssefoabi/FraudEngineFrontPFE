import { itRendersAllMutations } from '@cdiscount/jest-utils';

import UrlBlock from '../';

jest.resetModules();

jest.mock('../useUrl', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      allParameters: {},
    })
    .mockReturnValueOnce({
      allParameters: [
        {
          key: 'search',
          typeId: 0,
        },
        {
          key: 'Latitude',
          typeId: 1,
        },
      ],
    }),
  namedExport: 'useUrl',
}));

const mutations = [
  { name: 'with null parameters' },
  { name: 'with empty parameters' },
  { name: 'with parameters' },
];

describe(UrlBlock.name, () => {
  itRendersAllMutations(UrlBlock, mutations);
});
