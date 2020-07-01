import { itReturnsCorrectResult } from '@cdiscount/jest-utils';

import paginate from '../paginate';

const pages = Array.from({ length: 99 }, (v, k) => k);

describe('paginate', () => {
  describe('without params', () => {
    itReturnsCorrectResult(paginate()(pages));
  });
  describe('with correct params', () => {
    itReturnsCorrectResult(paginate(3, 20)(pages));
  });
  describe('with uncorrect (out of range) params', () => {
    itReturnsCorrectResult(paginate(10, 50)(pages));
  });
});
