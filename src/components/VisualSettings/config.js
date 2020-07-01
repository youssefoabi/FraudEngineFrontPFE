export const ImagesUrlConfig = [
  {
    columns: 5,
    id: 'urlImageDesktop',
    type: 'input',
    label: 'URL image PC',
  },
  {
    columns: 5,
    id: 'urlLinkDesktop',
    type: 'input',
    label: 'Lien PC',
  },
  {
    columns: 5,
    id: 'urlImageMobile',
    type: 'input',
    label: 'URL image Mobile',
  },
  {
    columns: 5,
    id: 'urlLinkMobile',
    type: 'input',
    label: 'Lien Mobile',
  },
];

export const AlternativeTextConfig = [
  {
    columns: 5,
    id: 'alt',
    type: 'input',
    label: 'ALT',
  },
  {
    columns: 4,
    id: 'openInNewTab',
    type: 'switch',
    label: 'Ouvrir dans un nouvel onglet',
  },
  {
    columns: 3,
    id: 'isEnable',
    type: 'switch',
    label: 'Active',
  },
];

export const MarketingTextConfig = [
  {
    columns: 8,
    id: 'marketingText',
    type: 'input',
    label: "Texte de l'accroche marketing",
    size: 'large',
    multiline: true,
  },
  {
    columns: 3,
    id: 'isMarketingTextEnable',
    type: 'switch',
    label: 'Active',
  },
  {
    columns: 3,
    id: 'searchText',
    type: 'input',
    label: 'Texte du bouton rechercher',
  },
];
