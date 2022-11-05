import React from 'react';
import Stat from '../Components/Stat';

/**
 * Stat Story
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

export default {
  title: 'Stat',
  component: Stat,
};

const Template = (args) => <Stat {...args} />;

export const One = Template.bind({});
One.args = {
  number: '76%',
  caption:
    'Reported experiencing at least one symptom of a mental health condition in the past year',
};
