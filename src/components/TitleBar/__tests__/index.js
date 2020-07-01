import { itRendersAllMutations } from '@cdiscount/jest-utils';

import TitleBar from '../component';

describe(TitleBar.name, () => {
  itRendersAllMutations(TitleBar, [
    { name: 'without props', props: null },
    {
      name: 'with location.pathname and history.goBack',
      props: {
        location: { pathname: '/foo' },
        history: { goBack: jest.fn() },
      },
    },
  ]);
});
