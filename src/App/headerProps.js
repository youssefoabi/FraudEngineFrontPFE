import { Link } from 'react-router-dom';

export default {
  navigationProps: {
    Link,
    entries: [
      {
        label: 'SERVICES',
        entries: [
          {
            label: 'PARAMETRAGE',
            entries: [
              {
                label: 'Moteurs de recherche',
                path: '/engines',
              },
              {
                label: 'Groupe de moteurs de recherche',
                path: '/engines-groups',
              },
              {
                label: 'Référentiel des gammes',
                path: '/scopes',
              },
            ],
          },
        ],
      },
    ],
  },
};
