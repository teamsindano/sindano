import { create } from '@storybook/theming';
import logo from '../src/sindano_logo.svg';

export default create({
  base: 'light',

  colorPrimary: '#283592',
  colorSecondary: '#EC1E7B',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'rgba(188, 174, 198, 1)',
  appBorderRadius: 6,

  // Typography
  fontBase: '"League Spartan", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: '#EC1E7B',
  barBg: '#283592',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 6,

  brandTitle: 'Sindano Storybook',
  brandUrl: 'https://example.com',
  brandImage: logo,
  brandTarget: '_self',
});