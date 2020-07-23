import { itReturnsCorrectResult } from '@cdiscount/jest-utils';

import criterionFixture from '../__fixtures__';
import parse from '../parse';

describe('parse', () => {
  describe('criterion', () => {
    itReturnsCorrectResult(parse(criterionFixture));
  });
  describe('null', () => {
    itReturnsCorrectResult(parse(null));
  });
});
