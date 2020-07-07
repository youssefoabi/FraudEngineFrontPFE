import { itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { saveRule } from '../operations';
import ruleFixture from '../__fixtures__';

jest.mock('react-global-configuration');

describe('RulesEdition operations', () => {
  describe('saga', () => {
    const rule = { payload: { rule: ruleFixture } };
    const nullRule = { payload: { rule: null } };

    itShouldMatchSequence('saveRule with null rule', () => saveRule(nullRule), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('saveRule with success', () => saveRule(rule), [NO_PARAM, NO_PARAM, NO_PARAM]);
    itShouldMatchSequence('saveRule with failure', () => saveRule(rule), [NO_PARAM, NO_PARAM, new Error()]);
  });
});
