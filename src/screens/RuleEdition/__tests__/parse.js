import { itReturnsCorrectResult } from '@cdiscount/jest-utils';

import parse from '../parse';
import ruleFixture from '../__fixtures__';

describe('parse', () => {
  describe('rule', () => {
    itReturnsCorrectResult(parse(ruleFixture));
  });
  describe('null', () => {
    itReturnsCorrectResult(parse(null));
  });
});
