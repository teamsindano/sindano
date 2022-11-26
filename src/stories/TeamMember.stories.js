import React from 'react';
import TeamMember from '../Components/TeamMember';

/**
 * The Team Member Stories Component
 * @author [Sam](https://github.com/Samm96)
 *
 */

export default {
    title: 'Teammember',
    component: TeamMember,
    argTypes: {
        photo: { control: "text" },
        name: { control: "text" },
        pronouns: { control: "text" },
        headline: { control: "text" },
    }
};

const Template = (args) => <TeamMember {...args}></TeamMember>;

export const Member = Template.bind({});
Member.args = {
    photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80',
    name: 'Woofers',
    pronouns: '(dog/retriever)',
    headline: 'Good Boy with the bestest behavior. He deserves a treat. Woof woof woof',
};