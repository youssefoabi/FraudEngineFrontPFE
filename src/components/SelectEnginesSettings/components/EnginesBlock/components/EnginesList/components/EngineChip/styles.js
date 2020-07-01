import { doveGray, eucalyptus, shamrock, silver, white } from '@cdiscount/ui-colors';

export default function style() {
  return {
    baseStyle: {
      borderRadius: 5,
      color: white,
      marginLeft: 5,
      marginTop: 10,
      height: 25,
    },
    statusEnableChip: {
      backgroundColor: shamrock,
      '&:hover': {
        backgroundColor: shamrock,
      },
    },
    statusEnableCurrentChip: {
      backgroundColor: eucalyptus,
      '&:hover': {
        backgroundColor: eucalyptus,
      },
    },
    statusDisableChip: {
      backgroundColor: silver,
      '&:hover': {
        backgroundColor: silver,
      },
    },
    statusDisableCurrentChip: {
      backgroundColor: doveGray,
      '&:hover': {
        backgroundColor: doveGray,
      },
    },
  };
}
