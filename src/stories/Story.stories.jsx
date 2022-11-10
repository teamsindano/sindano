import React from 'react';
import Story from '../Components/Story';

export default {
    title: 'Story',
    component: Story,
};

export const StoryTemplate = (args) => <Story {...args} />;

export const Primary = StoryTemplate.bind({});