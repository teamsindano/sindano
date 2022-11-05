import React from 'react';
import Stats from '../Components/Stats';

/**
 * Stats Story
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

export default {
  title: 'Stats',
  component: Stats,
};

const Template = (args) => <Stats {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title:
    'The Mental Health Crisis in LGBTQ+ Communities is an Economic Crisis for America',
};
