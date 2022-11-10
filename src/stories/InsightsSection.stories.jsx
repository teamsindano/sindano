import React from 'react';
import InsightsSection from '../Components/InsightsSection';

/**
 * The Insights Section Stories Component
 * @author [Sam](https://github.com/Samm96)
 *
 */

export default {
    title: 'Insights Section',
    component: InsightsSection,
};

export const InsightsTemplate = (args) => <InsightsSection {...args} />;

export const Primary = InsightsTemplate.bind({});
Primary.args = {
   primary: true,
};