import { eucalyptus, trinidad, white } from '@cdiscount/ui-colors';

export default function style() {
  return {
    statusLinkedChip: {
      backgroundColor: eucalyptus,
      borderRadius: 5,
      color: white,
      marginLeft: 5,
      marginTop: 10,
      height: 25,
    },
    statusNotLinkedChip: {
      backgroundColor: trinidad,
      borderRadius: 5,
      color: white,
      marginLeft: 5,
      marginTop: 10,
      height: 25,
    },
  };
}
