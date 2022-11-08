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
  padding: 80px 0 0 80px;

  &.team__story-container {
    background-color: transparent;
    width: 550px;
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
`;

const Team = () => {
  return (
    <Container>
      <Header>Our Story</Header>
      <Container className="team__story-container">
        <Text>
          Sindano Health was founded by Tara Marshall-Hill to address the
          problems she faced in finding appropriate mental healthcare. Motivated
          to create a solution to the months-long process of what felt like "a
          shot in the dark" to locate an&nbsp;appropriate and safe therapist for
          her family's needs, Tara&nbsp;and her team designed a solution.
        </Text>
        <Text>
          Sindano Health's insights provide greater patient experience
          visibility for all stakeholders to close the knowledge
          and&nbsp;competency gaps in mental healthcare for
          LGBTQ+&nbsp;communities.
        </Text>
      </Container>
    </Container>
  );
};

export default Team;
