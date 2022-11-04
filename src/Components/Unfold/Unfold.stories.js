import Unfold from './Unfold';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Unfold',
  component: Unfold,
};

export const UnfoldComponent = (args) => <Unfold {...args}/>;