import { itRendersAllMutations } from '@cdiscount/jest-utils';

import clientApi from '../../../client-api';
import CriterionEdition from '../';

jest.mock('../../../client-api');

beforeEach(() => {
  clientApi.mockClear();
});

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
}));

jest.mock('use-react-router', () => () => ({ match: {} }));

describe(CriterionEdition.name, () => {
  itRendersAllMutations(CriterionEdition, [{ name: 'without props', props: {} }]);
});
