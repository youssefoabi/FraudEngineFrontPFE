import { apricot, doveGray, eucalyptus, shamrock, silver, trinidad, white } from '@cdiscount/ui-colors';

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
      backgroundColor: apricot,
      '&:hover': {
        backgroundColor: apricot,
      },
    },
    statusEnableCurrentChip: {
      backgroundColor: trinidad,
      '&:hover': {
        backgroundColor: trinidad,
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
    statusValidChip: {
      backgroundColor: shamrock,
      '&:hover': {
        backgroundColor: shamrock,
      },
    },
    statusValidCurrentChip: {
      backgroundColor: eucalyptus,
      '&:hover': {
        backgroundColor: eucalyptus,
      },
    },
  };
}
