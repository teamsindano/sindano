import styled from "styled-components";
import DataFigure from "./DataFigure";

/**
 * Data Component
 * @author [Peter Staal](https://github.com/pstaal)
 */
 
const DataWrapper = styled.div`
    background-color: ${(props) => `${props.theme.colors.alt_text_white}`};
    padding: 16px;
    width: 100%;
    margin-left: 185px;
    margin-right: 145px;
    width: 290px;
    border-radius: 20px;
    position: relative;
`;

const Data = ({children}) => {
 return (
  <DataWrapper>
    {children}
  </DataWrapper>
 )
};


Data.Figure = DataFigure;


export default Data;