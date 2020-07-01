import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../actions';

export default function pendingActionNavigation(state = {}, action) {
  switch (action.type) {
    case PENDING_REQUEST:
      return {
        ...state,
        pendingRequest: true,
      };
    case RESET_PENDING_REQUEST:
      return {
        ...state,
        pendingRequest: false,
      };
    default:
      return state;
  }
}
