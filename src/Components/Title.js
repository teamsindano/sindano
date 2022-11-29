import styled from "styled-components";


const TitleContainer = styled.h2`
    font-family: ${(props) => props.theme.fonts.header.font_family[0]};
    font-weight: 700;
    font-size: 52px;
    line-height: 1;
    margin: 0;
    color: #283592;
    max-width: 950px;
    margin-bottom: ${(props) => props.marginBottom + `px`};

    @media (max-width: 375px) {
        max-width: 343px;
        font-size: 40px;
    }
`;

function Title({text, marginBottom}){

    return (
        <TitleContainer marginBottom={marginBottom}>{text}</TitleContainer>
    )
}

export default Title;