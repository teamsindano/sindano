import React from 'react';
import Teammember from '../Components/Teammember';

export default {
    title: 'Teammember',
    component: Teammember,
};

export const Template = (args) => <Teammember {...args}></Teammember>;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Teammember',
};