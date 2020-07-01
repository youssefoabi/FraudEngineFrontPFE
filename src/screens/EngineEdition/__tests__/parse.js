import { itReturnsCorrectResult } from '@cdiscount/jest-utils';

import engineFixture from '../__fixtures__';
import parse from '../parse';

describe('parse', () => {
  describe('engine', () => {
    itReturnsCorrectResult(parse(engineFixture));
  });
  describe('null', () => {
    itReturnsCorrectResult(parse(null));
  });
});
