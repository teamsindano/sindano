import styled from "styled-components";

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

const DataBlock = ({data}) => {
     
    return (
        <>
        <DataFigure>{data.dataTitle}</DataFigure>
        {data.dataContent.map((content) => {
           return <DataText>{content}</DataText> 
        }) 
        }
        </>
    )

};

export default DataBlock;
