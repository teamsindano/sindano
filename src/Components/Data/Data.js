import styled from "styled-components";

const DataWrapper = styled.div`
    background-color: #fff;
    padding: 16px;
    margin: 0;
    margin-left: 185px;
    margin-right: 145px;
    width: 290px;
    height: 263px;
    border-radius: 20px;
    position: relative;
`;

const DataFigure = styled.h2`
    font-family: ${props => props.theme.fonts.header.font_family[0]};
    width: max-content;
    font-weight: 700;
    font-size: 68px;
    line-height: 0.9;
    margin: 0 auto 20px auto;
    color: #283592;
`;

const DataText = styled.p`
    font-family: ${props => props.theme.fonts.text.font_family[0]};
    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;
    color: #283592;
`;

const DataButton = styled.button`
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

const Data = () => {
 return (
    <DataWrapper>
        <DataFigure>71%</DataFigure>
        <DataText>Of providers reported Mental and behavioral health as the most significant need for the LGBTQ+ community</DataText>
        <DataButton>&#9432;</DataButton>
    </DataWrapper>
 )

};

export default Data;