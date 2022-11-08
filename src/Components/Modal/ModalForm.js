import styled from "styled-components";
import linkedinIcon from "../../Images/linkedin-icon.png";

/**
 * Modal Form Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const ModalFormTitle = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    margin-bottom: 32px;
`;

const ModalFormText = styled.p`
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.default_component_blue};
`;

const ModalFormIcon = styled.img`
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 9px;
`;

const Form = styled.form`
    font-family: ${(props) => props.theme.fonts.text.font_family[0]};
    width: 100%;
    margin: 0;
    padding: 0;
`

const ModalLabel = styled.label`
    padding: 0;
    margin: 0;
    width: 100%;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;
    display:inline-block;
`;

const ModalInput = styled.input`
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 12px;
    padding: 15px 20px;
    box-sizing: border-box;
    margin-bottom: 24px;
    &::placeholder {
        color: #000;
        opacity: 1;
    }
`;

const ModalInputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const ModalInputContainerDiv = styled.div`
    width: 259px;
    display: flex;
    flex-direction: column;
`;

const ModalSubmitButton = styled.button`
    border: none;
    width: 168px;
    height: 50px;
    left: 451px;
    background: ${(props) => props.theme.colors.default_button_pink};
    border-radius: 12px;
    color: #fff;
    padding: 15px 28px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    &:hover {
    background: ${(props) => props.theme.gradients.button_hover};
  }
`;

const SubmitText = styled.p`
    width: 349px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.33;
`;

function ModalForm() {

    return (
        <Form>
            <ModalFormTitle>
                <ModalFormIcon src={linkedinIcon}/>
                <ModalFormText>Auto-fill with LinkedIn</ModalFormText>
            </ModalFormTitle>
        <ModalLabel htmlFor="name">Name</ModalLabel>
        <ModalInput type="text" id="name" placeholder="Tara Marshall-Hill"/>
        <ModalInputContainer>
            <ModalInputContainerDiv>
                <ModalLabel htmlFor="company">Company</ModalLabel>
                <ModalInput type="text" id="company" placeholder="Sindano Health"/>
            </ModalInputContainerDiv>
            <ModalInputContainerDiv>
                <ModalLabel htmlFor="title">Title</ModalLabel>
                <ModalInput type="text" id="title" placeholder="Founder"/>
            </ModalInputContainerDiv>
        </ModalInputContainer>
        <ModalLabel htmlFor="email">Email</ModalLabel>
        <ModalInput type="email" id="email" placeholder="TaraMarshallHill@sindanohealth.com"/>
            <ModalInputContainer>
                <ModalSubmitButton>Schedule Call</ModalSubmitButton>
                <SubmitText>A member of our team will be in touch with you  to schedule a time to chat</SubmitText>
            </ModalInputContainer>
       </Form>
    );
};

export default ModalForm;