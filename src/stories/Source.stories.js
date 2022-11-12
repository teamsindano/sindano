import React from 'react';
import Source from '../Components/Source';

/**
 * Source Story
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

export default {
  title: 'Source',
  component: Source,
};

const Template = (args) => <Source {...args} />;

export const Default = Template.bind({});
Default.args = {
  info: 'Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S., source',
};
