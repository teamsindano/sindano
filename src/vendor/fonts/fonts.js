import { createGlobalStyle } from 'styled-components';

import LeageSpartanWoff2 from './league-spartan/league-spartan-v6-latin-700.woff2';
import LeageSpartanWoff from './league-spartan/league-spartan-v6-latin-700.woff';
import LeageSpartanTtf from './league-spartan/league-spartan-v6-latin-700.ttf';

import OpenSauce800 from './open-sauce-sans/OpenSauceSans-Black.ttf';
import OpenSauce700 from './open-sauce-sans/OpenSauceSans-ExtraBold.ttf';
import OpenSauce600 from './open-sauce-sans/OpenSauceSans-Bold.ttf'
import OpenSauce400Italic from './open-sauce-sans/OpenSauceSans-Italic.ttf';
import OpenSauce400 from './open-sauce-sans/OpenSauceSans-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'League Spartan';
  font-weight: 700;
  font-display: swap;
  font-style: bold;
  src: url(${LeageSpartanWoff2}) format('woff2'),
       url(${LeageSpartanWoff}) format('woff'),
       url(${LeageSpartanTtf}) format('truetype');
}


@font-face {
  font-family: 'Open Sauce Sans';
  font-weight: 800;
  font-display: swap;
  font-style: bold;
  src: url(${OpenSauce800}) format('truetype');
}

@font-face {
  font-family: 'Open Sauce Sans';
  font-weight: 700;
  font-display: swap;
  font-style: bold;
  src: url(${OpenSauce700}) format('truetype');
}

@font-face {
  font-family: 'Open Sauce Sans';
  font-weight: 600;
  font-display: swap;
  font-style: bold;
  src: url(${OpenSauce600}) format('truetype');
}

@font-face {
  font-family: 'Open Sauce Sans';
  font-weight: 400;
  font-display: swap;
  font-style: italic;
  src: url(${OpenSauce400Italic}) format('truetype');
}

@font-face {
  font-family: 'Open Sauce Sans';
  font-weight: 400;
  font-display: swap;
  font-style: normal;
  src: url(${OpenSauce400}) format('truetype');
}
`;

