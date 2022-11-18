import React from 'react';
import PrimaryButton from '../Components/PrimaryButton';

export default {
  title: 'Primary Button',
  component: PrimaryButton,
};

const Template = (args) => (
  <PrimaryButton {...args}> {args.label}</PrimaryButton>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Request a call',
};
