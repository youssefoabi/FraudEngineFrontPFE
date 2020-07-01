import { itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { saveScope } from '../operations';
import scopes from '../../ScopesManagement/__fixtures__';

jest.mock('react-global-configuration');

describe('ScopesCreation operations', () => {
  describe('saga', () => {
    const scope = { payload: { scope: scopes[0] } };
    const nullScope = { payload: { scope: null } };

    itShouldMatchSequence('saveScope with null scope', () => saveScope(nullScope), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('saveScope with success', () => saveScope(scope), [NO_PARAM, NO_PARAM, NO_PARAM]);
    itShouldMatchSequence('saveScope with failure', () => saveScope(scope), [
      NO_PARAM,
      NO_PARAM,
      new Error(),
    ]);
  });
});
