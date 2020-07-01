import { combineReducers } from 'redux';

import { enginesEntities, enginesNavigation } from '../components/EnginesDataGrid/reducers';
import { navigationEngineError, navigationEngineSuccess } from '../components/EngineForm/reducers';
import {
  navigationEnginesGroupError,
  navigationEnginesGroupSuccess,
} from '../components/EnginesGroupForm/reducers';
import { navigationScopeError, navigationScopeSuccess } from '../components/ScopeForm/reducers';
import { scopesEntities, scopesNavigation } from '../components/ScopesDataGrid/reducers';
import pendingActionNavigation from '../components/ServerActionBackdrop/reducers/navigationReducer';

const rootReducer = combineReducers({
  entities: combineReducers({
    scopes: scopesEntities,
    engines: enginesEntities,
  }),
  navigation: combineReducers({
    scopes: scopesNavigation,
    scopeFormError: navigationScopeError,
    scopeFormSuccess: navigationScopeSuccess,
    engineFormError: navigationEngineError,
    engineFormSuccess: navigationEngineSuccess,
    enginesGroupFormError: navigationEnginesGroupError,
    enginesGroupFormSuccess: navigationEnginesGroupSuccess,
    pendingRequest: pendingActionNavigation,
    engines: enginesNavigation,
  }),
});

export default rootReducer;
