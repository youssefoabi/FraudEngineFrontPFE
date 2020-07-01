import { all } from 'redux-saga/effects';

import engineCreationOperations from '../screens/EngineCreation/operations';
import engineEditionOperations from '../screens/EngineEdition/operations';
import enginesGroupCreationOperations from '../screens/EnginesGroupCreation/operations';
import enginesGroupEditionOperations from '../screens/EnginesGroupEdition/operations';
import enginesManagementOperations from '../screens/EnginesManagement/operations';
import scopeCreationOperations from '../screens/ScopeCreation/operations';
import scopeEditionOperations from '../screens/ScopeEdition/operations';
import scopesManagementOperations from '../screens/ScopesManagement/operations';

export default function* watchAll() {
  yield all([...scopeCreationOperations]);
  yield all([...scopeEditionOperations]);
  yield all([...scopesManagementOperations]);
  yield all([...engineCreationOperations]);
  yield all([...engineEditionOperations]);
  yield all([...enginesManagementOperations]);
  yield all([...enginesGroupCreationOperations]);
  yield all([...enginesGroupEditionOperations]);
}
