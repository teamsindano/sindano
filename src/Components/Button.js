import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
  font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
  font-weight: ${(props) => `${props.theme.fonts.text.weights.bold}`};
  color: ${(props) => `${props.theme.colors.alt_text_white}`};
  background: ${(props) => `${props.theme.colors.default_button_pink}`};
  line-height: 20px;
  border-radius: 12px;
  padding: 15px 28px;
  width: 186px;
  border: none;
  height: 50px;
  padding: 0;
  margin: 29px 20px 28px 8px;

  &:hover {
    cursor: pointer;
    background: ${(props) => `${props.theme.gradients.button_hover}`};
  }
`;

function Button({ children, onButtonClick }) {
  return <StyledButton onClick={onButtonClick}>{children}</StyledButton>;
}
export default Button;
