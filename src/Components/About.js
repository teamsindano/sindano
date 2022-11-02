import styled from "styled-components";
/** `import UnfoldComponent from "./Unfold."` (or something like that) */

/**
 * The About Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Location with the group of Unfold components reside
 */

// replace css values with Theme.js props

const Section = styled.div`
    background-color: #F5F5F5;
    margin: 0;
    padding: 100px 0 40px 80px;
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
  <Section>
    <Header>What We Do</Header>
    {/** add 4 unfold components here **/}
  </Section>
  );
};

export default About;
