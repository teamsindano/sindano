import styled from "styled-components";

/**
 * The Team Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Section about the Sindano Team
 */

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  background-color: ${(props) => `${props.theme.colors.secondary_background}`};
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: 80px 80px 0 80px;

  &.story {
    background-color: transparent;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &.story__story-container {
    background-color: transparent;
    width: 550px;
    padding: 0;
    grid-column: 1;
  }

  &.story__founder {
    background-color: transparent;
    width: 455px;
    margin: 0;
    padding: 0;
    grid-column: 2;
    justify-self: end;
  }

  &.story__founder-quote {
    background-color: ${(props) => `${props.theme.colors.pink_opacity}`};
    width: 455px;
    margin: 0;
    padding: 0;
    border-radius: 20px;
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

  &.team__founder-quote-text {
    font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
    font-style: ${(props) => `${props.theme.fonts.text.styles}`};
    width: 407px;
    line-height: 22px;
    margin: 0 auto 0;
    padding: 24px 0 24px 24px;
  }
`;

const Story = () => {
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
          {/* Add team-member component here for founder */}
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
    </Container>
  );
};

export default Story;