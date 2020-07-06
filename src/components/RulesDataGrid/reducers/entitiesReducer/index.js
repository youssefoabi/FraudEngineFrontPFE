import { prop } from 'ramda';
import { registerEntries } from '@cdiscount/redux-entities-utils';

import { SET_RULES } from '../../actions';

const initialState = { all: [], byId: {} };

export default function rulesEntities(state = initialState, action) {
  switch (action.type) {
    case SET_RULES:
      return registerEntries(action.payload, prop('id'), initialState);
    default:
      return state;
  }
}
