import { createGlobalStyle } from 'styled-components';

import ManropeBoldFont from 'assets/fonts/Manrope-Bold.ttf';
import ManropeExtraBoldFont from 'assets/fonts/Manrope-ExtraBold.ttf';
import ManropeMediumFont from 'assets/fonts/Manrope-Medium.ttf';
import ManropeRegularFont from 'assets/fonts/Manrope-Regular.ttf';
import ManropeSemiBoldFont from 'assets/fonts/Manrope-SemiBold.ttf';

export default createGlobalStyle`
  @font-face {
    font-weight: bold;
    font-family: Metropolis;
    src: url(${ManropeBoldFont});
  }

  @font-face {
    font-weight: 800;
    font-family: Metropolis;
    src: url(${ManropeExtraBoldFont});
  }

  @font-face {
    font-weight: 500;
    font-family: Metropolis;
    src: url(${ManropeMediumFont});
  }

  @font-face {
    font-weight: 400;
    font-family: Metropolis;
    src: url(${ManropeRegularFont});
  }

  @font-face {
    font-weight: 600;
    font-family: Metropolis;
    src: url(${ManropeSemiBoldFont});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    min-height: 100vh;
  }

  body {
    font: 14px 'Metropolis', sans-serif;
  }
`;
