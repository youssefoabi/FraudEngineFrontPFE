import { combineReducers } from 'redux';

import { criteriaEntities, criteriaNavigation } from '../components/CriteriaDataGrid/reducers';
import { navigationCriterionError, navigationCriterionSuccess } from '../components/CriterionForm/reducers';
import { navigationRuleError, navigationRuleSuccess } from '../components/RuleForm/reducers';
import { rulesEntities, rulesNavigation } from '../components/RulesDataGrid/reducers';
import pendingActionNavigation from '../components/ServerActionBackdrop/reducers/navigationReducer';

const rootReducer = combineReducers({
  entities: combineReducers({
    rules: rulesEntities,
    criteria: criteriaEntities,
  }),
  navigation: combineReducers({
    pendingRequest: pendingActionNavigation,
    rules: rulesNavigation,
    ruleFormError: navigationRuleError,
    ruleFormSuccess: navigationRuleSuccess,
    criteria: criteriaNavigation,
    criterionFormError: navigationCriterionError,
    criterionFormSuccess: navigationCriterionSuccess,
  }),
});

export default rootReducer;
