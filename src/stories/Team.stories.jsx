import React from 'react';
import Team from '../Components/Team';

export default {
    title: 'Team',
    component: Team,
};

export const TeamTemplate = (args) => <Team {...args} />;

export const Primary = TeamTemplate.bind({});