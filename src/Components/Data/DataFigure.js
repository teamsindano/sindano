import _ from "lodash";
import styled from "styled-components";
import _ from "lodash";

/**
 * Data Figure Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const DataFigureDiv = styled.h2`
  font-family: ${(props) => props.theme.fonts.header.font_family[0]};
  width: max-content;
  font-weight: 700;
  font-size: 68px;
  line-height: 0.9;
  margin: 0 auto 20px auto;
  color: #283592;
`;

const DataText = styled.p`
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #283592;
`;

<<<<<<< HEAD
const DataFigure= ({data}) => {
     
    return (
        <>
        <DataFigureDiv>{data.dataTitle}</DataFigureDiv>
        {data.dataContent.map((content) => {
           return <DataText key={_.uniqueId("figure-")}>{content}</DataText> 
        }) 
        }
        </>
    )

=======
const DataFigure = ({ data }) => {
  return (
    <>
      <DataFigureDiv>{data.dataTitle}</DataFigureDiv>
      {data.dataContent.map((content) => {
        return <DataText key={_.uniqueId("figure-")}>{content}</DataText>;
      })}
    </>
  );
>>>>>>> 01289dd6318c7175aa577db53ea7e03f7f87729d
};

export default DataFigure;
