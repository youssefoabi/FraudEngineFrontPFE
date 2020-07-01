import { itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { createEnginesGroup } from '../operations';
import enginesGroupFixture from '../../EnginesGroupEdition/__fixtures__';

jest.mock('react-global-configuration');

describe('EnginesGroupCreation operations', () => {
  describe('saga', () => {
    const enginesGroup = { payload: { enginesGroup: enginesGroupFixture } };
    const nullEnginesGroup = { payload: { enginesGroup: null } };

    itShouldMatchSequence(
      'createEnginesGroup with null enginesGroup',
      () => createEnginesGroup(nullEnginesGroup),
      [NO_PARAM, NO_PARAM, NO_PARAM],
    );
    itShouldMatchSequence('createEnginesGroup with success', () => createEnginesGroup(enginesGroup), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('createEnginesGroup with failure', () => createEnginesGroup(enginesGroup), [
      NO_PARAM,
      NO_PARAM,
      new Error(),
    ]);
  });
});
