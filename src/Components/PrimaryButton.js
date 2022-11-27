import styled from 'styled-components';


const PrimaryButtonContainer = styled.button`
  font-family: ${(props) => props.theme.fonts.families.header};
  white-space: nowrap;
  width: 170px;
  height: 50px;
  color: ${(props) => props.theme.colors.white_text_color};
  background-color: ${(props) => props.theme.colors.aqua_button_color};
  padding: 15px 28px;
  border: none;
  margin: 0;
  border-radius: 12px;
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  font-size: ${(props) => props.theme.fonts.sizes.text_m};
  line-height: 1.25;
  cursor: pointer;
`;


function PrimaryButton({onClick, label}) {
  return (
    <PrimaryButtonContainer onClick={onClick}>
      {label}
    </PrimaryButtonContainer>
  );
}

export default PrimaryButton;
