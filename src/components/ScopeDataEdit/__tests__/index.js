import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import ScopeDataEdit from '../';

describe(ScopeDataEdit.name, () => {
  itRendersCorrectly(<ScopeDataEdit />);
});
