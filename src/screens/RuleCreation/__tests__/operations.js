import { itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { createRule } from '../operations';
import ruleFixture from '../../RuleEdition/__fixtures__';

jest.mock('react-global-configuration');

describe('RulesCreation operations', () => {
  describe('saga', () => {
    const rule = { payload: { rule: ruleFixture } };
    const nullRule = { payload: { rule: null } };

    itShouldMatchSequence('createRule with null rule', () => createRule(nullRule), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('createRule with success', () => createRule(rule), [NO_PARAM, NO_PARAM, NO_PARAM]);
    itShouldMatchSequence('createRule with failure', () => createRule(rule), [
      NO_PARAM,
      NO_PARAM,
      new Error(),
    ]);
  });
});
