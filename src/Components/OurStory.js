import styled from "styled-components";
import TeamMember from "./TeamMember";
import taraMarshall from "../Images/team/tara_marshall_hill.png";
import Team from "./Team";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animationVariants";

/**
 * The Our Story Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Section about the Sindano Team
 */

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  background-color: ${(props) => `${props.theme.colors.primary_background}`};
  max-width: 1440px;
  width: 1281px;
  height: fit-content;
  margin: 0 auto;
  padding: 80px 80px 85px 80px;

  &.story {
    background-color: transparent;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  &.story__story-container {
    background-color: transparent;
    width: 620px;
    margin: 0;
    padding: 0;
  }
  &.story__founder {
    background-color: transparent;
    max-width: 608px;
    margin: 32px 0 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gird-template-rows: 1fr 1fr;
    grid-gap: 16px;
  }

  &.team__container {
    width: fit-content;
    background-color: transparent;
    margin: 67px 0 0 36px;
    padding: 0;
  }
`;

const Header = styled.h2`
  font-family: ${(props) => `${props.theme.fonts.header.font_family}`};
  font-weight: ${(props) => `${props.theme.fonts.header.weight}`};
  font-size: ${(props) => `${props.theme.fonts.header.sizes.header_s_default}`};
  line-height: 52px;
  color: ${(props) => `${props.theme.colors.default_component_blue}`};
  margin: 0;
`;

const Text = styled.p.attrs(() => ({ tabIndex: 0 }))`
  font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
  font-weight: ${(props) => `${props.theme.fonts.text.weights.normal}`};
  font-size: ${(props) => `${props.theme.fonts.text.sizes.text_l_default}`};
  line-height: 30px;
  margin: 32px 0 0;

  &.story__founder-quote {
    font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
    font-style: ${(props) => `${props.theme.fonts.text.styles}`};
    width: 608px;
    line-height: 22px;
    margin: 0;
    padding: 0;
  }

  &.story__founder-name {
    font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
    margin: 0;
    text-align: right;
    grid-column: 2;
  }
`;

const Line = styled.span`
    border-left: 2px solid ${(props) => `${props.theme.colors.default_text_color}`};
    height: 132px;
`;

const OurStory = () => {
  return (
    <Container   
    id="ourstory"
    as={motion.div}
    variants={sectionVariants}
    initial="offscreen"
    whileInView="onscreen">
      {/* replace with Content component*/}
      <Header>Our Story</Header>
      <Container className="story">
        <Container className="story__story-container">
          {/* replace with Content component */}
          <Text>
            Sindano Health was founded by Tara Marshall-Hill to address the
            problems she faced in finding appropriate mental healthcare.
            Motivated to create a solution to the months-long process of what
            felt like "a shot in the dark" to locate an&nbsp;appropriate and
            safe therapist for her family's needs, Tara&nbsp;and her team
            designed a solution.
          </Text>
          <Text>
            Sindano Health's insights provide greater patient experience
            visibility for all stakeholders to close the knowledge
            and&nbsp;competency gaps in mental healthcare for
            LGBTQ+&nbsp;communities.
          </Text>
        </Container>
        <Container className="story__founder">
          <Line></Line>
            <Text className="story__founder-quote">
              "As a queer Black woman, married to a queer Black nonbinary
              person, with a queer Black autistic daughter, I'm creating the
              solution my family needs. As it turns out, it's also the
              solution our communities need. Sindano Health exists so no
              other queer person from a racially marginalized background
              ever has to check out of the continuum of care due to lack of
              access to appropriate mental healthcare. Sindano Health exists
              because we all deserve to thrive."
            </Text>
            <Text className="story__founder-name">— Tara Marshall-Hill</Text>
          </Container>
      </Container>
      <Container className="team__container">
        <Team />
      </Container>
    </Container>
  );
};

export default OurStory;