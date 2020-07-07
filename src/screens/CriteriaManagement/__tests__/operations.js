import { itReturnsAllMutations, itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { deleteCriteria, deleteCriterion, fetchCriteria, parseResult } from '../operations';
import criteria from '../__fixtures__';

jest.mock('react-global-configuration');

describe('CriteriaManagement operations', () => {
  describe('parseResult', () => {
    itReturnsAllMutations(parseResult, [
      { name: 'without result', props: [null] },
      { name: 'with wrong result', props: [{ foo: {} }] },
      { name: 'with good result', props: [{ data: criteria }] },
    ]);
  });
  describe('saga', () => {
    itShouldMatchSequence('fetchCriteria', () => fetchCriteria(), [NO_PARAM, { data: criteria }]);
    itShouldMatchSequence('deleteCriteria with success', () => deleteCriteria(), [
      NO_PARAM,
      [1, 2],
      [true],
      [true],
    ]);
    itShouldMatchSequence('deleteCriteria with failure', () => deleteCriteria(), [
      NO_PARAM,
      [1, 2],
      [true],
      [false],
    ]);
    itShouldMatchSequence('deleteCriterion with success', () => deleteCriterion(1), [NO_PARAM]);
    itShouldMatchSequence('deleteCriterion with failure', () => deleteCriterion(1), [NO_PARAM, new Error()]);
  });
});
