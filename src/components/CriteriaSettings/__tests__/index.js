import { itRendersAllMutations } from '@cdiscount/jest-utils';

import CriteriaSettings from '../';

jest.resetModules();

jest.mock('../useCriteria', () => ({
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

  namedExport: 'useCriteria',
}));

const mutations = [
  { name: 'without props' },
  { name: 'with Invalid Type' },
  { name: 'with Valid Type & Autocomplition' },
  { name: 'with Valid Type & not Autocomplition' },
];

describe(CriteriaSettings.name, () => {
  itRendersAllMutations(CriteriaSettings, mutations);
});
