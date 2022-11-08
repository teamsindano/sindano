import React from 'react';
import About from '../Components/About';

export default {
    title: 'About',
    component: About,
};

export const Template = (args) => <About {...args}></About>;

export const Primary = Template.bind({});