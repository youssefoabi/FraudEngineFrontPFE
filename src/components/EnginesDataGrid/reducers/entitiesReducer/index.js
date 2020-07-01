import { prop } from 'ramda';
import { registerEntries } from '@cdiscount/redux-entities-utils';

import { SET_ENGINES } from '../../actions';

const initialState = { all: [], byId: {} };

export default function campaignsEntities(state = initialState, action) {
  switch (action.type) {
    case SET_ENGINES:
      return registerEntries(action.payload, prop('id'), initialState);
    default:
      return state;
  }
}
