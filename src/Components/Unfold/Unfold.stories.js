import Unfold from './Unfold';
import { data } from '../../utils/data';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Unfold',
  component: Unfold,
};

const Template = (args) => <Unfold {...args}/>;

export const UnfoldComponent= Template.bind({});
UnfoldComponent.args = {
  text: data.whatWeDoCard[0].text,
};