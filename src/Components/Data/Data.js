import styled from "styled-components";
import DataButton from "./DataButton";
import DataFigure from "./DataFigure";
 
const DataWrapper = styled.div`
    background-color: #fff;
    padding: 16px;
    margin: 0;
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


Data.Button = DataButton;
Data.Figure = DataFigure;


export default Data;