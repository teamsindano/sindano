import styled from "styled-components";
/** `import UnfoldComponent from "./Unfold."` (or something like that) */

/**
 * The About Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Location with the group of Unfold components reside
 */

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  background-color: ${(props) => `${props.theme.colors.primary_background}`};
  margin: 0;
  padding: 100px 0 40px 80px;

  &.about__container {
    margin: 0;
    padding: 0 0 0 80px;
  }
`;

const Header = styled.h2`
  font-family: ${(props) => `${props.theme.fonts.header.font_family}`};
  font-size: ${(props) => `${props.theme.fonts.header.sizes.header_s_default}`};
  font-weight: ${(props) => `${props.theme.fonts.header.weight}`};
  line-height: 52px;
  color: ${(props) => `${props.theme.colors.default_component_blue}`};
  margin: 0;
  padding: 0;
`;

const About = () => {
  return (
    <Container>
      <Header>What We Do</Header>
      <Container className="about__container">
        {/** add 4 unfold components here **/}
        </Container>
    </Container>
  );
};

export default About;
