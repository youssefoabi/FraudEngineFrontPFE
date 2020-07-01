import { itRendersAllMutations } from '@cdiscount/jest-utils';

import ParametersBlock from '../';

jest.resetModules();

jest.mock('../useParameters', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValueOnce({})
    .mockReturnValueOnce({
      isValidType: false,
    })
    .mockReturnValueOnce({
      isValidType: true,
      isAutoCompletion: true,
    })
    .mockReturnValueOnce({
      isValidType: true,
      isAutoCompletion: false,
    }),

  namedExport: 'useParameters',
}));

const mutations = [
  { name: 'without props' },
  { name: 'with Invalid Type' },
  { name: 'with Valid Type & Autocomplition' },
  { name: 'with Valid Type & not Autocomplition' },
];

describe(ParametersBlock.name, () => {
  itRendersAllMutations(ParametersBlock, mutations);
});
