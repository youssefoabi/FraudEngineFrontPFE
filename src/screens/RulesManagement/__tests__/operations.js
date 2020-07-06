import { itReturnsAllMutations, itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { deleteRule, deleteRules, fetchRules, parseResult } from '../operations';
import rules from '../__fixtures__';

jest.mock('react-global-configuration');

describe('RulesManagement operations', () => {
  describe('parseResult', () => {
    itReturnsAllMutations(parseResult, [
      { name: 'without result', props: [null] },
      { name: 'with wrong result', props: [{ foo: {} }] },
      { name: 'with good result', props: [{ data: rules }] },
    ]);
  });
  describe('saga', () => {
    itShouldMatchSequence('fetchRules', () => fetchRules(), [NO_PARAM, { data: rules }]);
    itShouldMatchSequence('deleteRules with success', () => deleteRules(), [
      NO_PARAM,
      [1, 2],
      [true],
      [true],
    ]);
    itShouldMatchSequence('deleteRules with failure', () => deleteRules(), [
      NO_PARAM,
      [1, 2],
      [true],
      [false],
    ]);
    itShouldMatchSequence('deleteRule with success', () => deleteRule(1), [NO_PARAM]);
    itShouldMatchSequence('deleteRule with failure', () => deleteRule(1), [NO_PARAM, new Error()]);
  });
});
