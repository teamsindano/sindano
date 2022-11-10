import styled from "styled-components";


const TitleContainer = styled.h2`
    font-family: ${(props) => props.theme.fonts.header.font_family[0]};
    font-weight: 700;
    font-size: 52px;
    line-height: 1;
    color: #283592;
    max-width: 950px;
`;

function Title({text}){

    return (
        <TitleContainer>{text}</TitleContainer>
    )
}

export default Title;