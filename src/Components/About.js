import styled from "styled-components";
/** `import UnfoldComponent from "./Unfold."` (or something like that) */

/**
 * The About Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Location with the group of Unfold components reside
 */

// replace css values with Theme.js props

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  background-color: #f5f5f5;
  margin: 0;
  padding: 100px 0 40px 80px;

  &.about__container {
    margin: 0;
    padding: 0 0 0 80px;
  }
`;

const Header = styled.h2`
  font-family: "League Spartan", sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 52px;
  color: #283592;
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
