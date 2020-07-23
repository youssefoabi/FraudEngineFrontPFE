import { all } from 'redux-saga/effects';

import criteriaManagementOperations from '../screens/CriteriaManagement/operations';
import criterionCreationOperations from '../screens/CriterionCreation/operations';
import criterionEditionOperations from '../screens/CriterionEdition/operations';
import ruleCreationOperations from '../screens/RuleCreation/operations';
import ruleEditionOperations from '../screens/RuleEdition/operations';
import rulesManagementOperations from '../screens/RulesManagement/operations';

export default function* watchAll() {
  yield all([...ruleCreationOperations]);
  yield all([...ruleEditionOperations]);
  yield all([...rulesManagementOperations]);
  yield all([...criterionCreationOperations]);
  yield all([...criterionEditionOperations]);
  yield all([...criteriaManagementOperations]);
}
