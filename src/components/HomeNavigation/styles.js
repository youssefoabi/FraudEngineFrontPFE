export default function style() {
  return {
    homeNavigationButton: {
      backgroundColor: '#F5F5F5',
      fontSize: 200,
      height: '150px',
      margin: 10,
      width: '300px',
      '&:hover': {
        backgroundColor: '#BABABA',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: '#BABABA',
        },
        '*': {
          fontSize: 200,
        },
      },
    },
    homeNavigationGrid: {
      marginTop: 50,
    },
  };
}
