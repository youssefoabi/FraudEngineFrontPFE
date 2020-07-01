// eslint-disable-next-line import/prefer-default-export
export const config = [
  {
    columns: 4,
    id: 'name',
    type: 'input',
    label: 'Nom du moteur',
  },
  {
    columns: 4,
    id: 'isEnable',
    type: 'switch',
    defaultValue: false,
    label: 'Moteur active',
  },
  {
    columns: 4,
    id: 'id',
    type: 'input',
    label: 'ID Moteur',
    inputType: 'number',
  },
];
