import { itShouldMatchSequence, NO_PARAM } from '@cdiscount/jest-utils';

import { saveEnginesGroup } from '../operations';
import enginesGroupFixture from '../__fixtures__';

jest.mock('react-global-configuration');

describe('EnginesGroupEdition operations', () => {
  describe('saga', () => {
    const enginesGroup = { payload: { enginesGroup: enginesGroupFixture } };
    const nullEnginesGroup = { payload: { enginesGroup: null } };

    itShouldMatchSequence(
      'saveEnginesGroup with null enginesGroup',
      () => saveEnginesGroup(nullEnginesGroup),
      [NO_PARAM, NO_PARAM, NO_PARAM],
    );
    itShouldMatchSequence('saveEnginesGroup with success', () => saveEnginesGroup(enginesGroup), [
      NO_PARAM,
      NO_PARAM,
      NO_PARAM,
    ]);
    itShouldMatchSequence('saveEnginesGroup with failure', () => saveEnginesGroup(enginesGroup), [
      NO_PARAM,
      NO_PARAM,
      new Error(),
    ]);
  });
});
