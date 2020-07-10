import EngineCreation from '../screens/EngineCreation';
import EngineEdition from '../screens/EngineEdition';
import EnginesGroupCreation from '../screens/EnginesGroupCreation';
import EnginesGroupEdition from '../screens/EnginesGroupEdition';
import EnginesManagement from '../screens/EnginesManagement';
import Home from '../screens/Home';
// import RuleCreation from '../screens/RuleCreation';
// import RuleEdition from '../screens/RuleEdition';
import CriteriaManagement from '../screens/CriteriaManagement';
import CriterionCreation from '../screens/CriterionCreation';
import CriterionEdition from '../screens/CriterionEdition';
import RulesManagement from '../screens/RulesManagement';
import ScopeCreation from '../screens/ScopeCreation';
import ScopeEdition from '../screens/ScopeEdition';
import ScopesManagement from '../screens/ScopesManagement';

export default [
  {
    exact: true,
    path: '/',
    component: Home,
    name: 'Accueil',
  },
  {
    exact: true,
    path: '/scopes/create',
    component: ScopeCreation,
    name: "Création d'une gamme",
  },
  {
    exact: true,
    path: '/scopes/edit/:id',
    component: ScopeEdition,
    name: "Edition d'une gamme",
  },
  {
    exact: true,
    path: '/scopes',
    component: ScopesManagement,
    name: 'Gestion des gammes',
  },
  {
    exact: true,
    path: '/engines/create',
    component: EngineCreation,
    name: "Création d'un moteur de recherche",
  },
  {
    exact: true,
    path: '/engines/edit/:id',
    component: EngineEdition,
    name: "Edition d'un moteur de recherche",
  },
  {
    exact: true,
    path: '/engines',
    component: EnginesManagement,
    name: 'Gestion des moteurs',
  },
  {
    exact: true,
    path: '/engines-groups/create',
    component: EnginesGroupCreation,
    name: "Création d'un groupe de moteurs",
  },
  {
    exact: true,
    path: '/engines-groups/edit/:id',
    component: EnginesGroupEdition,
    name: "Edition d'un groupe de moteurs",
  },
  // {
  //   exact: true,
  //   path: '/rules/create',
  //   component: RuleCreation,
  //   name: "Création d'une règle",
  // },
  // {
  //   exact: true,
  //   path: '/rules/edit/:id',
  //   component: RuleEdition,
  //   name: "Edition d'une règle",
  // },
  {
    exact: true,
    path: '/rules',
    component: RulesManagement,
    name: 'Gestion des règles',
  },

  {
    exact: true,
    path: '/criteria/create',
    component: CriterionCreation,
    name: "Création d'un critère",
  },
  {
    exact: true,
    path: '/criteria/edit/:id',
    component: CriterionEdition,
    name: "Edition d'un critère",
  },
  {
    exact: true,
    path: '/criteria',
    component: CriteriaManagement,
    name: 'Gestion des critères',
  },
];
