import Data from "../Components/Data/Data";
import { data } from "../utils/data";
import renderData from "../utils/renderData";



export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Data",
  component: Data,
};

const Template = ({ children}) => (
  <Data>{children}</Data>
);

export const Default = Template.bind({});
Default.args = {
  children: data.unfoldDataCard.map((child) => (
    <>
    {renderData(child.id)}
    </>
  )),
};