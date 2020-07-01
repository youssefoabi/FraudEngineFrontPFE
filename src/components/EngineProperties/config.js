// eslint-disable-next-line import/prefer-default-export
export const config = [
  {
    columns: 4,
    id: 'engineName',
    type: 'input',
    label: "Libellé de l'onglet",
  },
  {
    columns: 4,
    id: 'pictogramUrl',
    type: 'input',
    label: 'Url du picto',
  },
  {
    columns: 2,
    id: 'pictogramUrl',
    type: 'imageUrlWithPreview',
    label: 'Aperçu picto',
    imageSize: '40x35',
  },
  {
    columns: 2,
    id: 'isEnable',
    type: 'switch',
    label: 'Onglet actif',
  },
];
