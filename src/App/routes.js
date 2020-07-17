import CriteriaManagement from '../screens/CriteriaManagement';
import CriterionCreation from '../screens/CriterionCreation';
import CriterionEdition from '../screens/CriterionEdition';
import Home from '../screens/Home';
import RuleCreation from '../screens/RuleCreation';
import RuleEdition from '../screens/RuleEdition';
import RulesManagement from '../screens/RulesManagement';

export default [
  {
    exact: true,
    path: '/',
    component: Home,
    name: 'Accueil',
  },
  {
    exact: true,
    path: '/rules/create',
    component: RuleCreation,
    name: "Création d'une règle",
  },
  {
    exact: true,
    path: '/rules/edit/:id',
    component: RuleEdition,
    name: "Edition d'une règle",
  },
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
