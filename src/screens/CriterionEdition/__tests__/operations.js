import { itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { saveCriterion } from '../operations';
import criterionFixture from '../__fixtures__';

jest.mock('react-global-configuration');

describe('CriteriaEdition operations', () => {
  describe('saga', () => {
    const criterion = { payload: { criterion: criterionFixture } };
    const nullCriterion = { payload: { criterion: null } };

    itShouldMatchSequence('saveCriterion with null criterion', () => saveCriterion(nullCriterion), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('saveCriterion with success', () => saveCriterion(criterion), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('saveCriterion with failure', () => saveCriterion(criterion), [
      NO_PARAM,
      NO_PARAM,
      new Error(),
    ]);
  });
});
