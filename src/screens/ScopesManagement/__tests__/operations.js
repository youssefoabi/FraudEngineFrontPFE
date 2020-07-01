import { itReturnsAllMutations, itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { deleteScope, deleteScopes, fetchScopes, parseResult } from '../operations';
import scopes from '../__fixtures__';

jest.mock('react-global-configuration');

describe('ScopesManagement operations', () => {
  describe('parseResult', () => {
    itReturnsAllMutations(parseResult, [
      { name: 'without result', props: [null] },
      { name: 'with wrong result', props: [{ foo: {} }] },
      { name: 'with good result', props: [{ data: scopes }] },
    ]);
  });
  describe('saga', () => {
    itShouldMatchSequence('fetchScopes', () => fetchScopes(), [NO_PARAM, { data: scopes }]);
    itShouldMatchSequence('deleteScopes with success', () => deleteScopes(), [
      NO_PARAM,
      [1, 2],
      [true],
      [true],
    ]);
    itShouldMatchSequence('deleteScopes with failure', () => deleteScopes(), [
      NO_PARAM,
      [1, 2],
      [true],
      [false],
    ]);
    itShouldMatchSequence('deleteScope with success', () => deleteScope(1), [NO_PARAM]);
    itShouldMatchSequence('deleteScope with failure', () => deleteScope(1), [NO_PARAM, new Error()]);
  });
});
