import { all } from 'redux-saga/effects';

import engineCreationOperations from '../screens/EngineCreation/operations';
import engineEditionOperations from '../screens/EngineEdition/operations';
import enginesGroupCreationOperations from '../screens/EnginesGroupCreation/operations';
import enginesGroupEditionOperations from '../screens/EnginesGroupEdition/operations';
import enginesManagementOperations from '../screens/EnginesManagement/operations';
// import ruleCreationOperations from '../screens/RuleCreation/operations';
// import ruleEditionOperations from '../screens/RuleEdition/operations';
import criteriaManagementOperations from '../screens/CriteriaManagement/operations';
import criterionCreationOperations from '../screens/CriterionCreation/operations';
import criterionEditionOperations from '../screens/CriterionEdition/operations';
import rulesManagementOperations from '../screens/RulesManagement/operations';
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
  // yield all([...ruleCreationOperations]);
  // yield all([...ruleEditionOperations]);
  yield all([...rulesManagementOperations]);
  yield all([...criterionCreationOperations]);
  yield all([...criterionEditionOperations]);
  yield all([...criteriaManagementOperations]);
}
