import { prop } from 'ramda';
import { registerEntries } from '@cdiscount/redux-entities-utils';

import { SET_SCOPES } from '../../actions';

const initialState = { all: [], byId: {} };

export default function scopesEntities(state = initialState, action) {
  switch (action.type) {
    case SET_SCOPES:
      return registerEntries(action.payload, prop('id'), initialState);
    default:
      return state;
  }
}
