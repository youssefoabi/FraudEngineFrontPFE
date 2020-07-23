import { itReturnsCorrectResult } from '@cdiscount/jest-utils';

import rules from '../../../screens/RulesManagement/__fixtures__';
import sortBy, { dateComparator } from '../';

describe('sortBy', () => {
  describe('sorts by default without params', () => {
    itReturnsCorrectResult(sortBy(null, null));
  });

  describe('sorts by name', () => {
    itReturnsCorrectResult(sortBy('asc', 'name')(rules));
  });

  describe('sorts by name desc', () => {
    itReturnsCorrectResult(sortBy('desc', 'name')(rules));
  });

  describe('sorts by id', () => {
    itReturnsCorrectResult(sortBy('asc', 'id')(rules));
  });

  describe('sorts by modification date', () => {
    itReturnsCorrectResult(sortBy('asc', 'modifiedAt')(rules));
  });
});

describe('dateComparator', () => {
  it('returns -1', () => {
    expect(dateComparator('asc', 'date')({ date: 1546297200000 }, { date: 1551394800000 })).toBe(-1);
    expect(dateComparator('desc', 'date')({ date: 1551394800000 }, { date: 1546297200000 })).toBe(-1);
    expect(dateComparator('asc', 'date')({ date: 1546297200000 }, { date: null })).toBe(-1);
    expect(dateComparator('desc', 'date')({ date: 1546297200000 }, { date: null })).toBe(-1);
  });
  it('returns 1', () => {
    expect(dateComparator('asc', 'date')({ date: 1546297200000 }, { date: 1546297200000 })).toBe(0);
    expect(dateComparator('desc', 'date')({ date: 1546297200000 }, { date: 1546297200000 })).toBe(0);
    expect(dateComparator('asc', 'date')({ date: null }, { date: null })).toBe(0);
    expect(dateComparator('desc', 'date')({ date: null }, { date: null })).toBe(0);
  });
  it('returns 1', () => {
    expect(dateComparator('asc', 'date')({ date: 1551394800000 }, { date: 1546297200000 })).toBe(1);
    expect(dateComparator('desc', 'date')({ date: 1546297200000 }, { date: 1551394800000 })).toBe(1);
    expect(dateComparator('asc', 'date')({ date: null }, { date: 1546297200000 })).toBe(1);
    expect(dateComparator('desc', 'date')({ date: null }, { date: 1546297200000 })).toBe(1);
  });
});
