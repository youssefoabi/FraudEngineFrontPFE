// eslint-disable-next-line import/prefer-default-export
export const Config = [
  {
    columns: 8,
    id: 'explanation',
    type: 'input',
    label: 'Critère',
  },
  {
    columns: 8,
    id: 'code',
    type: 'input',
    label: 'Code critère',
  },

  {
    columns: 8,
    id: 'eligibleOperators',
    type: 'select',
    label: 'Les éligibles operateurs',
    defaultValue: [{ label: 'Equal', value: 'Equal' }],
    selectProps: {
      isMulti: true,
      options: [
        'GreaterThan',
        'GreaterThanOrEqual',
        'Equal',
        'NotEqual',
        'LowerThanOrEqual',
        'LowerThan',
        'Before',
        'After',
        'Enabled',
        'Disabled',
        'Between',
      ],
    },
  },
];
