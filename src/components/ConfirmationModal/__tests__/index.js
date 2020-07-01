import { itRendersCorrectly } from '@cdiscount/jest-utils';
import React from 'react';

import ConfirmationModal from '../';

describe(ConfirmationModal.name, () => {
  itRendersCorrectly(<ConfirmationModal />);
});
