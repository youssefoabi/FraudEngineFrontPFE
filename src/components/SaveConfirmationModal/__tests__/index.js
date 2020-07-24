import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import SaveConfirmationModal from '../';

describe(SaveConfirmationModal.name, () => {
  itRendersCorrectly(<SaveConfirmationModal />);
});
