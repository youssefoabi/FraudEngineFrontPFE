import { itRendersAllMutations } from '@cdiscount/jest-utils';

import App from '../';

describe(App.name, () => {
  itRendersAllMutations(App, [
    {
      name: 'with default props',
      props: {},
    },
  ]);
});
