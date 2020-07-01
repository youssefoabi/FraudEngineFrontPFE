import { itRendersAllMutations } from '@cdiscount/jest-utils';

import ParameterChip from '../';

jest.resetModules();

jest.mock('../useParameter', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      isLinkedParameter: true,
    })
    .mockReturnValueOnce({
      isLinkedParameter: false,
    }),
  namedExport: 'useParameter',
}));

const mutations = [
  { name: 'without props' },
  { name: 'with linked parameter', props: { parameter: 'Search' } },
  { name: 'with unlinked parameter', props: { parameter: 'Search' } },
];

describe(ParameterChip.name, () => {
  itRendersAllMutations(ParameterChip, mutations);
});
