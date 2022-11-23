import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/Components/Theme';
import { GlobalStyle } from '../src/vendor/fonts/fonts';

/**
 * 
 * @author [J. Hartsek](https://github.com/JHartsek),
 * Added `customViewports`: @author [Sam](https://github.com/Samm96)
 *
 */

export const customViewports = {
  Desktop: {
      name: "Large",
      styles: {
          width: "1440px",
          height: "100%",
      },
      type: 'Desktop',
  },
  Smaller_Desktop: {
      name: "Medium",
      styles: {
          width: "1024px",
          height: "100%",
      },
      type: 'Smaller Desktop',
  },
  iPhone_Mini: {
      name: "Small",
      styles: {
          width: "375px",
          height: "100%",
      },
      type: 'iPhone Mini',
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  },
  viewport: {
    viewports: {
      viewports: customViewports
    },
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Story />
    </ThemeProvider>
  ),
];