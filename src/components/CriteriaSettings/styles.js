import { cornflower, white } from '@cdiscount/ui-colors';
import { fontSizeBase } from '@cdiscount/ui-fonts';

export default function style() {
  return {
    header: {
      padding: '12px',
      borderBottom: `1px solid ${cornflower}`,
      borderRadius: '5px',
      fontSize: fontSizeBase,
      fontWeight: 300,
      fontFamily: '"Open Sans", sans-serif',
      textTransform: 'uppercase',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      color: white,
      minHeight: 'auto',
      backgroundColor: '#1B2731',
    },
    criteria: {
      width: '43%',
      display: 'inherit',
      fontSize: '0.625rem',
      alignItems: 'inherit',
      fontWeight: 700,
      textTransform: 'uppercase',
      justifyContent: 'inherit',
    },
    menuItem: {
      width: '26%',
      display: 'inherit',
      fontSize: '0.625rem',
      alignItems: 'inherit',
      fontWeight: 700,
      textTransform: 'uppercase',
      justifyContent: 'inherit',
    },
  };
}
