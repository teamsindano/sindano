import styled from "styled-components";

const ModalText = styled.p`
  padding: 0;
  margin: 0;
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  font-family: ${(props) => props.theme.fonts.font_families[1]};
`

function ModalSuccess(){
    return (
       <ModalText>
            A member of our team will get in touch with you to schedule a time to chat
       </ModalText>

    );
};

export default ModalSuccess;