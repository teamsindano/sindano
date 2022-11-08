import styled from "styled-components";

const DataButtonWrapper = styled.button`
font-family: ${props => props.theme.fonts.text.font_family[0]};
width: 16px;
height: 20px;
border: none;
position: absolute;
right: 16px;
bottom: 16px;
color: #283592;
background: transparent;
font-weight: 600;
font-size: 16px;
line-height: 1.25;
`;

const DataButton = () => {
    return (
        <DataButtonWrapper>&#9432;</DataButtonWrapper>
    )
};

export default DataButton;
