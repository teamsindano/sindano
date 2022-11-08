import React from 'react';
import SecondaryButton from '../Components/SecondaryButton';

/**
 * Secondary Button Story
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

export default {
  title: 'Secondary Button',
  component: SecondaryButton,
};

const Template = (args) => (
  <SecondaryButton {...args}> {args.label}</SecondaryButton>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Subscribe',
};
