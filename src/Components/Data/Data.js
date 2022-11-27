import styled from "styled-components";
import DataFigure from "./DataFigure";

/**
 * Data Component
 * @author [Peter Staal](https://github.com/pstaal)
 */
 
const DataWrapper = styled.div`
    background-color: ${(props) => `${props.theme.colors.white_text_color}`};
    padding: 16px;
    margin: 0;
    width: 100%;
    margin-left: 185px;
    margin-right: 145px;
    width: 290px;
    border-radius: 20px;
    position: relative;
    @media screen and (max-width: 1150px) {
      margin-left: 45px;
      margin-right: 40px;
    }
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