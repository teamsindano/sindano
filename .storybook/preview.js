import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/Components/Theme';
import { GlobalStyle } from '../src/vendor/fonts/fonts';

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
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Story />
    </ThemeProvider>
  ),
];