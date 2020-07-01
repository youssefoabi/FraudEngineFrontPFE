import { itReturnsCorrectResult } from '@cdiscount/jest-utils';

import parse from '../parse';
import scopes from '../../ScopesManagement/__fixtures__';

describe('parse', () => {
  describe('scope', () => {
    itReturnsCorrectResult(parse(scopes[0]));
  });
  describe('null', () => {
    itReturnsCorrectResult(parse(null));
  });
});
