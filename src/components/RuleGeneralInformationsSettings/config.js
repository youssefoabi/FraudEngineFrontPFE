// eslint-disable-next-line import/prefer-default-export
export const config = [
  {
    id: 'name',
    type: 'input',
    label: 'Nom de la règle',
  },
  {
    id: 'description',
    type: 'input',
    label: 'Description',
    size: 'large',
    multiline: true,
  },
  {
    id: 'comment',
    type: 'input',
    label: 'Commentaire',
    size: 'large',
    multiline: true,
  },
  {
    id: 'priority',
    type: 'input',
    label: 'Priorité',
    inputType: 'number',
  },

  {
    columns: 6,
    id: 'isActivated',
    type: 'switch',
    defaultValue: false,
    label: 'Règle active',
  },
  {
    columns: 6,
    id: 'isValidated',
    type: 'switch',
    defaultValue: false,
    label: 'Règle valide',
  },
];
