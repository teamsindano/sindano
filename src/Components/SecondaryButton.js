import styled from 'styled-components';

/**
 * Secondary Button Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

const SecondaryButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary_background};
  color: ${(props) => props.theme.colors.default_button_aqua};
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  font-size: ${(props) => props.theme.fonts.text.sizes.text_m};
  font-weight: ${(props) => props.theme.fonts.text.weights.bold};
  border-radius: 12px;
  border: 1px ${(props) => props.theme.colors.default_button_aqua} solid;
  line-height: 1.25;
  padding: 14px 27px;
  cursor: pointer;
`;

export default SecondaryButton;
