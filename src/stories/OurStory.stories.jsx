import React from 'react';
import OurStory from '../Components/OurStory';

export default {
    title: 'Our Story',
    component: OurStory,
};

export const StoryTemplate = (args) => <OurStory {...args} />;

export const Primary = StoryTemplate.bind({});