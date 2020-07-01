import { itRendersAllMutations } from '@cdiscount/jest-utils';

import clientApi from '../../../client-api';
import ScopeEdition from '../';

jest.mock('../../../client-api');

beforeEach(() => {
  clientApi.mockClear();
});

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
}));

jest.mock('use-react-router', () => () => ({ match: {} }));

describe(ScopeEdition.name, () => {
  itRendersAllMutations(ScopeEdition, [{ name: 'without props', props: {} }]);
});
