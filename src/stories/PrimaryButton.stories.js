import React from 'react';
import PrimaryButton from '../Components/PrimaryButton';

export default {
  title: 'Primary Button',
  component: PrimaryButton,
};

const Template = (args) => (
  <PrimaryButton {...args} />
);

export const Primary = Template.bind({});

