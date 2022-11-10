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

export const Two = Template.bind({});
Two.args = {
  number: '2-4x',
  caption:
    'Times LGBTQ+ American adults are more likely to experience depression, anxiety and suicidal ideation than non-LGBTQ+ American adults',
};

export const Three = Template.bind({});
Three.args = {
  number: '6x',
  caption:
    'LGBTQ+ teens are six times more likely to experience symptoms of depression than non-LGBTQ+ identifying teens.',
};

export const Four = Template.bind({});
Four.args = {
  number: '22%',
  caption:
    'Of transgender individuals say they have avoided doctors or health care our of concern they would be discriminated against.',
};