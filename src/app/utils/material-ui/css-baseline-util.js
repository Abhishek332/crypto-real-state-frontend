import LatoBold700 from '../../../fonts/Lato-Bold.ttf';
import LatoLight300 from '../../../fonts/Lato-Light.ttf';
import LatoMedium500 from '../../../fonts/Lato-Medium.ttf';
import LatoRegular400 from '../../../fonts/Lato-Regular.ttf';
import LatoSemiBold600 from '../../../fonts/Lato-Semibold.ttf';

export const cssBaselineClasses = `
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 300;
          src: url(${LatoLight300}) format('truetype');
        }

        @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            src: url(${LatoRegular400}) format('truetype');
          }

          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 500;
            src: url(${LatoMedium500}) format('truetype');
          }

          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 600;
            src: url(${LatoSemiBold600}) format('truetype');
          }

          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            src: url(${LatoBold700}) format('truetype');
          }
`;
