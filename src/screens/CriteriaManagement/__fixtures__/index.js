export default [
  {
    id: 1,
    code: 'OrderAmountCriterion',
    explanation: 'Montant de la commande',
    eligibleOperators: ['GreaterThan', 'GreaterThanOrEqual'],
  },
  {
    id: 2,
    code: 'DelevryCountryCriterion',
    explanation: 'Pays de livraison',
    eligibleOperators: ['Equal', 'LowerThan'],
  },
  {
    id: 3,
    code: 'BrandCriterion',
    explanation: 'ID Marque',
    eligibleOperators: ['GreaterThan', 'GreaterThanOrEqual', 'Equal', 'LowerThan'],
  },
  {
    id: 4,
    code: 'FraudRiskLevelCriterion',
    explanation: 'Niveau de risque',
    eligibleOperators: ['GreaterThan', 'GreaterThanOrEqual', 'Equal', 'LowerThanOrEqual', 'LowerThan'],
  },
];
