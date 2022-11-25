import _ from "lodash";
import styled from "styled-components";

/**
 * Data Figure Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

// ******* RECOMMENDATION *********
// This is an H2, but it's named as if it's a div. Also for font family,
// it may be best to define that high up in the application and then only specify anywhere
// where it should be different (if at all). That way, you don't need to specify it everywhere.
const DataFigureDiv = styled.h2`
  font-family: ${(props) => props.theme.fonts.header.font_family[0]};
  width: max-content;
  font-weight: 700;
  font-size: 68px;
  line-height: 0.9;
  margin: 0 auto 20px auto;
  color: #283592;
`;

// ******* RECOMMENDATION *********
// Similar to above, you can probably put a few very common styles at the top of your application,
// such as "all <p> elements are 16px unless specified using a styled component". Same for other typography
// properties, colors, etc. This can probably reduce the amount of CSS you're having to write.
const DataText = styled.p`
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #283592;
`;

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

};

export default DataFigure;
