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
                label: 'Gestion des règles',
                path: '/rules',
              },
              {
                label: 'Référentiel des critères',
                path: '/criteria',
              },
            ],
          },
        ],
      },
    ],
  },
};
