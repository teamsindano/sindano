import React from 'react';
import SecondaryButton from '../Components/SecondaryButton';

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
