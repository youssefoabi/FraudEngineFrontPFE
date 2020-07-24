import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import SaveRulesConfirmationModal from '../';

describe(SaveRulesConfirmationModal.name, () => {
  itRendersCorrectly(<SaveRulesConfirmationModal />);
});
