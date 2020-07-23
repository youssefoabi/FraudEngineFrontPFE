import { itRendersAllMutations } from '@cdiscount/jest-utils';

import clientApi from '../../../client-api';
import RuleEdition from '../';

jest.mock('../../../client-api');

beforeEach(() => {
  clientApi.mockClear();
});

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
}));

jest.mock('use-react-router', () => () => ({ match: {} }));

describe(RuleEdition.name, () => {
  itRendersAllMutations(RuleEdition, [{ name: 'without props', props: {} }]);
});
