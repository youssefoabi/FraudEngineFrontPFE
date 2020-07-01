import { itReturnsCorrectResult } from '@cdiscount/jest-utils';

import parse from '../parse';
import scopes from '../__fixtures__';

describe('parse', () => {
  itReturnsCorrectResult(parse(scopes));
});
