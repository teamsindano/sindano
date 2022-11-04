import React from 'react';
import Chart from '../Components/Chart';

export default {
    title: 'Chart',
    component: Chart,
};

export const ChartTemplate = (args) => <Chart {...args} />;

export const Primary = ChartTemplate.bind({});
Primary.args = {
   primary: true,
   label: 'Chart',
};