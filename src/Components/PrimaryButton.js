import styled from "styled-components";

const PrimaryButtonContainer = styled.button`
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  white-space: nowrap;
  width: 170px;
  height: 50px;
  color: #fff;
  background-color: #ec1e7b;
  padding: 15px 28px;
  border: none;
  margin: 0;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.gradients.button_hover};
  }
`;

function PrimaryButton() {

    return (
        <PrimaryButtonContainer>Request a call</PrimaryButtonContainer>
    )
};

export default PrimaryButton;