import styled from 'styled-components';

/**
 * The Team Member Component
 * @author [Sam](https://github.com/Samm96)
 *
 * React template to create team members.
 */

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  max-width: 240px;
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  &.teammember__text-container {
    font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
    font-size: ${(props) => `${props.theme.fonts.text.sizes.text_s}`};
    font-weight: ${(props) => `${props.theme.fonts.text.weights.normal}`};
    line-height: 20px;
    color: ${(props) => `${props.theme.colors.default_text_color}`};
    margin: 16px auto 0;
    max-width: 240px;
    flex-direction: column;
    text-align: center;
    @media (max-width: 375px) {
      max-width: 167px;
    }
  }
  &.teammember__name-container {
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 126px;
  height: 126px;
  margin: 0 auto 0;
  object-fit: cover;
  object-position: center;
`;

const Text = styled.p.attrs(() => ({ tabIndex: 0 }))`
  margin: 0 auto 0;
  padding; 0;
  width: fit-content;
  @media (max-width: 375px) {
    font-size: ${(props) => `${props.theme.fonts.text.sizes.text_xs}`};
  }
`;

const Name = styled.span.attrs(() => ({ tabIndex: 0 }))`
  font-weight: ${(props) => `${props.theme.fonts.text.weights.bold}`};
  width: fit-content;
  margin: 0;
  padding; 0;
  @media (max-width: 375px) {
    font-size: ${(props) => `${props.theme.fonts.text.sizes.text_xs}`};
    display: flex;
    flex-direction: column;
  }
  &.teammember__pronouns {
    width: fit-content;
    font-weight: ${(props) => `${props.theme.fonts.text.weights.normal}`};
    margin: 0;
    @media (max-width: 375px) {
      margin: 0 auto 0;
    }
  }
`;

const TeamMember = ({ photo, name, pronouns, headline }) => {
  return (
    <div className="teammember">
      <Container>
        <Photo src={photo} alt={name} />
        <Container className="teammember__text-container">
          <Container className="teammember__name-container">
            <Name>
              {name}{' '}
              <Name className="teammember__pronouns">
                {pronouns ? pronouns : ''}
              </Name>
            </Name>
          </Container>
          <Text>{headline}</Text>
        </Container>
      </Container>
    </div>
  );
};

export default TeamMember;
