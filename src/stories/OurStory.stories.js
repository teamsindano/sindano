import React from 'react';
import OurStory from '../Components/OurStory';

/**
 * The OurStory Story
 * @author [Sam](https://github.com/Samm96)
 *
 */

export default {
    title: 'Our Story',
    component: OurStory,
};

export const StoryTemplate = (args) => <OurStory {...args} />;

export const Primary = StoryTemplate.bind({});