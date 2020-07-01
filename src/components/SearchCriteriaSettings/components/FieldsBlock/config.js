export const ActivateFieldsConfig = [
  {
    columns: 6,
    id: 'isEnable',
    type: 'switch',
    label: 'Actif',
    defaultValue: false,
  },
  {
    columns: 6,
    id: 'isMandatory',
    type: 'switch',
    label: 'Champ obligatoire',
    defaultValue: false,
  },
];

export const PlaceholderConfig = [
  {
    columns: 6,
    id: 'label',
    type: 'input',
    label: 'Placeholder',
  },
];

export const typesOptions = [
  { value: 'Address', fieldTypeId: 1, label: "Autocomplétion d'adresse" },
  { value: 'Numeric', fieldTypeId: 3, label: 'Numérique' },
  { value: 'Alphanumeric', fieldTypeId: 2, label: 'Texte libre' },
];

export const FIELDS_BY_ID = { Address: 1, Numeric: 3, Alphanumeric: 2 };
