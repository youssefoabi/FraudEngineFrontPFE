import { black, cornflower, ironGrey, white } from '@cdiscount/ui-colors';
import { fontSizeBase } from '@cdiscount/ui-fonts';
import { isNilOrEmpty } from 'ramda-adjunct';

export default function style() {
  return {
    headerSlider: {
      padding: '17px 30px 12px',
      borderBottom: `1px solid ${cornflower}`,
      borderRadius: '5px',
      background: white,
      color: black,
      fontSize: fontSizeBase,
      fontWeight: 300,
      fontFamily: '"Open Sans", sans-serif',
      textTransform: 'uppercase',
    },
    imagesWrapper: {
      flex: 1,
    },
    imagePreview: {
      height: 74,
      marginTop: '10px',
      width: 280,
      flex: 1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundColor: ironGrey,
    },
    imageUrlDesktop: ({ urlImageDesktop }) =>
      !isNilOrEmpty(urlImageDesktop) ? { backgroundImage: `url(${urlImageDesktop})` } : {},
    imageUrlMobile: ({ urlImageMobile }) =>
      !isNilOrEmpty(urlImageMobile) ? { backgroundImage: `url(${urlImageMobile})` } : {},
  };
}
