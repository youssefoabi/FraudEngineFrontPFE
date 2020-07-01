import { map } from 'ramda';

import parseScope from '../ScopeEdition/parse';

/**
 * @function parse
 */
const parse = map(parseScope);

export default parse;
