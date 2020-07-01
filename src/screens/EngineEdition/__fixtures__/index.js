export default {
  id: 1,
  code: 0,
  name: 'name',
  isEnable: true,
  scopes: [
    {
      scopeId: 1,
      name: "gamme active avec un param n'est pas lie...",
      order: 0,
      isEnable: true,
    },
    {
      scopeId: 2,
      name: 'gamme active valide',
      order: 0,
      isEnable: true,
    },
    {
      scopeId: 3,
      name: 'gamme disactive',
      order: 0,
      isEnable: false,
    },
  ],
  inputFields: [
    {
      id: 0,
      type: 'Address',
      order: 0,
      label: 'Placeholder Field 1',
      isEnable: true,
      isMandatory: true,
      parameters: [
        {
          id: 4,
          scopeId: 2,
          key: 'Latitude',
          externalCodeId: 4,
        },
      ],
    },
    {
      id: 1,
      type: 'Address',
      order: 0,
      label: 'Placeholder Field 2',
      isEnable: true,
      isMandatory: true,
      parameters: [
        {
          id: 0,
          scopeId: 1,
          key: 'cp',
          externalCodeId: 2,
        },
        {
          id: 1,
          scopeId: 1,
          key: 'commune',
          externalCodeId: 4,
        },
        {
          id: 3,
          scopeId: 2,
          key: 'search',
          externalCodeId: 1,
        },
      ],
    },
  ],
  backgroundImages: [
    {
      order: 0,
      urlImageDesktop:
        'https://www.leparisien.fr/resizer/CBn4GjacGJ5llevItKUbQYa6zcw=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/4U4PGCRHAK2F6HLMZCBI4PSDNU.jpg',
      urlLinkDesktop: 'Lien PC',
      urlImageMobile:
        'https://www.leparisien.fr/resizer/CBn4GjacGJ5llevItKUbQYa6zcw=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/4U4PGCRHAK2F6HLMZCBI4PSDNU.jpg',
      urlLinkMobile: 'Lien Mobile',
      alt: 'alternative text',
      openInNewTab: true,
      isEnable: true,
    },
  ],
  logo: {
    urlImageDesktop: 'string',
    urlLinkDesktop: 'string',
    urlImageMobile: 'string',
    urlLinkMobile: 'string',
    alt: 'string',
    openInNewTab: true,
    isEnable: true,
  },
  marketingText: {
    text: 'marketingText',
    isEnable: true,
  },
  searchText: 'searchText',
  createdAt: '2020-05-13T15:39:07.932Z',
  modifiedAt: '2020-05-13T15:39:07.932Z',
};
