import { itReturnsCorrectResult } from '@cdiscount/jest-utils';

import enginesGroupFixture from '../__fixtures__';
import parse from '../parse';

describe('parse', () => {
  describe('enginesGroup', () => {
    itReturnsCorrectResult(parse(enginesGroupFixture));
  });
  describe('null', () => {
    itReturnsCorrectResult(parse(null));
  });
});
