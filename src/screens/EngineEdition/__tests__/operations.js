import { itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { saveEngine } from '../operations';
import engineFixture from '../__fixtures__';

jest.mock('react-global-configuration');

describe('EnginesEdition operations', () => {
  describe('saga', () => {
    const engine = { payload: { engine: engineFixture } };
    const nullEngine = { payload: { engine: null } };

    itShouldMatchSequence('saveEngine with null engine', () => saveEngine(nullEngine), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('saveEngine with success', () => saveEngine(engine), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('saveEngine with failure', () => saveEngine(engine), [
      NO_PARAM,
      NO_PARAM,
      new Error(),
    ]);
  });
});
