import styled from 'styled-components';

/**
 * Secondary Button Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

const SecondaryButton = styled.button`
  background-color: ${(props) => props.theme.colors.white_text_color};
  color: ${(props) => props.theme.colors.aqua_button_color};
  font-family: ${(props) => props.theme.fonts.families.text};
  font-size: ${(props) => props.theme.fonts.sizes.text_m};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  border-radius: 12px;
  border: 1px ${(props) => props.theme.colors.aqua_button_color} solid;
  line-height: 1.25;
  padding: 14px 27px;
  cursor: pointer;
`;

export default SecondaryButton;
