import { prop } from 'ramda';
import { registerEntries } from '@cdiscount/redux-entities-utils';

import { SET_CRITERIA } from '../../actions';

const initialState = { all: [], byId: {} };

export default function criteriaEntities(state = initialState, action) {
  switch (action.type) {
    case SET_CRITERIA:
      return registerEntries(action.payload, prop('id'), initialState);
    default:
      return state;
  }
}
