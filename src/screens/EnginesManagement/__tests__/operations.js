import { itReturnsAllMutations, itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { deleteEngine, deleteEngines, fetchEngines, parseResult } from '../operations';
import engines from '../__fixtures__';

jest.mock('react-global-configuration');

describe('EnginesManagement operations', () => {
  describe('parseResult', () => {
    itReturnsAllMutations(parseResult, [
      { name: 'without result', props: [null] },
      { name: 'with wrong result', props: [{ foo: {} }] },
      { name: 'with good result', props: [{ data: engines }] },
    ]);
  });
  describe('saga', () => {
    itShouldMatchSequence('fetchEngines', () => fetchEngines(), [NO_PARAM, { data: engines }]);
    itShouldMatchSequence('deleteEngines with success', () => deleteEngines(), [
      NO_PARAM,
      [1, 2],
      [true],
      [true],
    ]);
    itShouldMatchSequence('deleteEngines with failure', () => deleteEngines(), [
      NO_PARAM,
      [1, 2],
      [true],
      [false],
    ]);
    itShouldMatchSequence('deleteEngine with success', () => deleteEngine(1), [NO_PARAM]);
    itShouldMatchSequence('deleteEngine with failure', () => deleteEngine(1), [NO_PARAM, new Error()]);
  });
});
