import { itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { createEngine } from '../operations';
import engineFixture from '../../EngineEdition/__fixtures__';

jest.mock('react-global-configuration');

describe('EnginesCreation operations', () => {
  describe('saga', () => {
    const engine = { payload: { engine: engineFixture } };
    const nullEngine = { payload: { engine: null } };

    itShouldMatchSequence('createEngine with null engine', () => createEngine(nullEngine), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('createEngine with success', () => createEngine(engine), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('createEngine with failure', () => createEngine(engine), [
      NO_PARAM,
      NO_PARAM,
      new Error(),
    ]);
  });
});
