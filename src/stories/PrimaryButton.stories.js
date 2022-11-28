import React from 'react';
import PrimaryButton from '../Components/PrimaryButton';

export default {
  title: 'Primary Button',
  component: PrimaryButton,
  argTypes: { onClick: { action: 'open a Modal'} }
};

const Template = (args) => (
  <PrimaryButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Request a call"
};

