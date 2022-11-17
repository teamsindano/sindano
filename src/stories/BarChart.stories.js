import React from 'react';
import BarChart from '../Components/BarChart';

/**
 * Bar Chart Story
 * @author [Sam](https://github.com/Samm96)
 *
 */

export default {
    title: 'Bar Chart',
    component: BarChart,
};

const Template = (args) => <BarChart {...args} />;

export const Chart = Template.bind({});