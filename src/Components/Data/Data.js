import styled from "styled-components";
import DataFigure from "./DataFigure";

/**
 * Data Component
 * @author [Peter Staal](https://github.com/pstaal)
 */
 
// ******* RECOMMENDATION *********
// As we discuss re-usable components, it's good to start thinking about which styles belong inside a component
// and which ones should be passed into a component by the consumer. Generally, I feel like margins should be
// handled by the consumer, but padding should be handled by the component. The thinking here is that if this is
// re-usable, the margins outside of this component might be dependent on where it is used and so the consumer should
// be in charge of that. You should consider how to approach this-- one way is to have the consumer wrap this in a
// styled component that applies the necessary styles for that particular use-case. Another way is similar to have
// the components accept classNames as props, then apply those classNames to the appropriate elements within the components.
// That way, the consumer can apply css rules for the class names it passes into the components. This the case with many
// Components, not just this one.
const DataWrapper = styled.div`
    background-color: ${(props) => `${props.theme.colors.alt_text_white}`};
    padding: 16px;
    margin: 0;
    /* Duplicate style- width is defined below */
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