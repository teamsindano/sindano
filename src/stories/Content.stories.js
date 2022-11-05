import React from 'react';
import Content from '../Components/Content';

export default {
  title: 'Content',
  component: Content,
};

const Template = (args) => <Content {...args} />;

export const Insights = Template.bind({});
Insights.args = {
  header: 'Insights for transparent and equitable precision mental healthcare',
  details: [
    `Sindano Health is a data analytics and SaaS technology company
    developing human-first AI solutions to address disparities in mental
    health outcomes for LGBTQ+ communities through a racial equity lens.`,
    `We empower mental healthcare systems and insurance plans with community-driven, actionable, real-time, and precise data insights that enable customized decision-making that identify and close care gaps for improved patient and practice outcomes.`,
  ],
};

export const OurStory = Template.bind({});
OurStory.args = {
  header: 'Our Story',
  details: [
    `Sindano Health was founded by Tara Marshall-Hill to address the problems she faced in finding appropriate mental healthcare. Motivated to create a solution to the months’ long process of what felt like “a shot in the dark'' to locate an appropriate and safe therapist for her family’s needs, Tara and her team designed a solution.`,
    `Sindano Health Insights provides greater patient experience visibility for all stakeholders to close the knowledge and competency gaps in mental healthcare for LGBTQ+ communities.   `,
  ],
};
