import { itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { createCriterion } from '../operations';
import criterionFixture from '../../CriterionEdition/__fixtures__';

jest.mock('react-global-configuration');

describe('CriteriaCreation operations', () => {
  describe('saga', () => {
    const criterion = { payload: { criterion: criterionFixture } };
    const nullCriterion = { payload: { criterion: null } };

    itShouldMatchSequence('createCriterion with null criterion', () => createCriterion(nullCriterion), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('createCriterion with success', () => createCriterion(criterion), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('createCriterion with failure', () => createCriterion(criterion), [
      NO_PARAM,
      NO_PARAM,
      new Error(),
    ]);
  });
});
