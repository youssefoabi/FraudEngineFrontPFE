export default {
  id: 1,
  name: 'RuleName',
  description: 'Description',
  isValidated: true,
  isActivated: false,
  priority: 2,
  validatedBy: 'Youssef',
  editedBy: 'Youssef',
  comment: 'comment',
  version: 1,
  editedAction: 'ADD',
  criteriaValues: [
    {
      criterion: { label: 'Montant de la commande', value: 'OrderAmountCriterion' },
      operator: 'GreaterThan',
      value: 20,
    },
    {
      criterion: { label: 'Pays de livraison', value: 'DelevryCountryCriterion' },
      operator: 'Equal',
      value: 'Morocco',
    },
  ],
  simulations: [
    {
      totalImpact: 2,
      totalRessources: 10,
    },
  ],
  createdAt: '2020-05-13T15:39:07.932Z',
  modifiedAt: '2020-05-13T15:39:07.932Z',
};
