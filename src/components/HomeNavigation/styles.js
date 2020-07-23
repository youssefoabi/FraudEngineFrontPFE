export default function style() {
  return {
    homeNavigationButton: {
      backgroundColor: '#F5F5F5',
      fontSize: 400,
      height: '300px',
      margin: 10,
      width: '600px',
      '&:hover': {
        backgroundColor: '#BABABA',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: '#BABABA',
        },
        '*': {
          fontSize: 400,
        },
      },
    },
    homeNavigationGrid: {
      marginTop: 50,
    },
  };
}
