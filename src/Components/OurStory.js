import styled from "styled-components";
import TeamMember from "./Teammember";
import taraMarshall from "../images/team/tara_marshall_hill.png";
import Team from "./Team";

/**
 * The Our Story Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Section about the Sindano Team
 */

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  background-color: ${(props) => `${props.theme.colors.secondary_background}`};
  width: 1281px;
  height: fit-content;
  margin: 0;
  padding: 80px 80px 85px 80px;

  &.story {
    background-color: transparent;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  &.story__story-container {
    background-color: transparent;
    width: 550px;
    padding: 0;
  }

  &.story__founder {
    background-color: transparent;
    width: 435px;
    margin: 32px 0 0;
    padding: 0;
  }

  &.story__founder-quote {
    background-color: transparent;
    width: 455px;
    margin: 16px 0 0;
    padding: 0;
  }

  &.team__container {
    background-color: transparent;
    margin: 67px auto 0;
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

  &.story__founder-quote-text {
    background-color: ${(props) => `${props.theme.colors.pink_opacity}`};
    font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
    font-style: ${(props) => `${props.theme.fonts.text.styles}`};
    border-radius: 20px;
    width: 407px;
    line-height: 22px;
    margin: 0;
    padding: 24px 0 24px 24px;
  }
`;

const OurStory = () => {
  return (
    <Container>
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
          <TeamMember
            photo={taraMarshall}
            name="Tara Marshall-Hill"
            pronouns="(she/her)"
            headline="Founder of Sidano Health"
          />
          <Container className="story__founder-quote">
            <Text className="story__founder-quote-text">
              "As a queer Black woman, married to a queer Black&nbsp;nonbinary
              person, with a queer Black autistic daughter, I'm creating the
              solution my family needs. As&nbsp;it&nbsp;turns out, it's also the
              solution our communities&nbsp;need. Sindano Health exists so no
              other&nbsp;queer person from a racially marginalized background
              ever has to check out of the continuum of&nbsp;care due to lack of
              access to appropriate mental healthcare. Sindano Health exists
              because we all deserve to thrive."
            </Text>
          </Container>
        </Container>
      </Container>
      <Container className="team__container">
        <Team />
      </Container>
    </Container>
  );
};

export default OurStory;
