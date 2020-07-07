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
  criterionOperatorValues: [
    {
      criterion: 'Montant',
      operator: 'Equal',
      value: 20,
    },
    {
      criterion: 'Pays',
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
