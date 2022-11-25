import React from 'react';
import OurStory from '../Components/OurStory';
import { customViewports } from '../../.storybook/preview';

/**
 * The OurStory Story
 * @author [Sam](https://github.com/Samm96)
 *
 */

export default {
    title: 'Our Story',
    component: OurStory,
    parameters: {
        viewport: {
            viewports: customViewports,
            defaultViewport: 'Desktop',
        }
    }
};

export const StoryTemplate = () => <OurStory />;
StoryTemplate.parameters = {
    viewport: {
        defaultViewport: 'Smaller_Desktop',
    },
};

StoryTemplate.parameters = {
    viewport: {
        defaultViewport: 'iPhone_Mini',
    },
};