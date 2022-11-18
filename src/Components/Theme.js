import React from 'react';
import { ThemeProvider } from 'styled-components';

/**
 * The CSS Themes
 * @author [Sam](https://github.com/Samm96)
 *
 * To use the 'ThemeProvider', you need to install the following:
 *
 * `npm install styled-components`
 */

export const theme = {
  colors: {
    primary_background: '#f5f5f5',
    footer_background: '#2D2D2D',
    default_text_color: '#000000',
    alt_text_white: '#ffff',
    default_button_aqua: '#1EA6AE',
    default_component_blue: '#283592',
  },

  fonts: {
    header: {
      font_family: ['League Spartan', 'sans-serif'],
      sizes: {
        header_xs: '44px',
        header_s_default: '52px',
        header_m: '56px',
        header_l: '80px',
      },
      weight: '700',
    },

    text: {
      font_family: ['Open Sauce Sans', 'sans-serif'],
      sizes: {
        text_xs: '12px',
        text_s: '14px',
        text_m: '16px',
        text_l_default: '20px',
      },
      weights: {
        black: '800',
        bold: '700',
        semi_bold: '600',
        normal: '400',
      },
      styles: 'italic',
    },
  },

  gradients: {
    component: `linear-gradient(
            0deg,
            rgba(233, 235, 244, 1) 100%,
            rgba(233, 235, 244, 1) 100%
          ),
          radial-gradient(
            110.58% 110.58% at 40.19% 148.08%,
            rgba(40, 53, 146, 0.5) 0%,
            rgba(255, 255, 255, 0) 100%
          ),
          radial-gradient(
            141.03% 3248.2% at 71.91% -110.26%,
            rgba(255, 152, 198, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          ),
          radial-gradient(
            93.91% 3215.11% at 1.53% 100%,
            rgba(219, 204, 229, 1) 100%,
            rgba(255, 255, 255, 1) 100%
          )`,
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
