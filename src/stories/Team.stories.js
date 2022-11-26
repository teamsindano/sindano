import React from 'react';
import Team from '../Components/Team';

/**
 * The Team Story
 * @author [Sam](https://github.com/Samm96)
 *
 */

export default {
    title: 'Team',
    component: Team,
};

export const TeamTemplate = (args) => <Team {...args} />;

export const Default = TeamTemplate.bind({});