import styled from 'styled-components';

/**
 * Source Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

const Container = styled.figure`
  margin: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${(props) => props.theme.colors.alt_text_white};
  width: 290px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  position: absolute;
  top: 290px;
  z-index: 10;
`;

const Info = styled.p`
  margin: 0;
  font: ${(props) => props.theme.fonts.text.font_family[0]};
  font-size: ${(props) => props.theme.fonts.text.sizes.text_xs};
  font-weight: ${(props) => props.theme.fonts.text.weights.semi_bold};
  line-height: 1.33;
`;

const Source = ({ info }) => {
  return (
    <Container>
      <Info>{info}</Info>
    </Container>
  );
};

export default Source;
