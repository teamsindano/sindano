import Unfold from "../Components/Unfold/Unfold";
import { data } from "../utils/data";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Unfold",
  component: Unfold,
};

const Template = ({ children, ...args }) => (
  <Unfold {...args}>{children}</Unfold>
);

export const UnfoldComponent = Template.bind({});
UnfoldComponent.args = {
  children: data.whatWeDoCard.map((child) => (
    <Unfold.Wrapper id={child.id}>
      <Unfold.Header id={child.id} cardTitle={child.cardTitle} />
      <Unfold.Content id={child.id} text={child.text} />
    </Unfold.Wrapper>
  )),
};