import styled from 'styled-components';
import _ from 'lodash';

/**
 * Content Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

const Section = styled.section`
  max-width: 620px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${(props) => props.theme.fonts.font_families.header};
  font-size: ${(props) => props.theme.fonts.sizes.header_s};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  color: ${(props) => props.theme.colors.blue_component_color};
  line-height: 1;
`;

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const Paragraph = styled.p`
  margin: 0;
  font-family: ${(props) => props.theme.fonts.font_families.text};
  font-size: ${(props) => props.theme.fonts.sizes.text_l};
  font-weight: ${(props) => props.theme.fonts.weights.normal};
  line-height: 1.5;
`;

const Content = ({ header, details }) => {
  return (
    <Section>
      <Title>{header}</Title>
      <Paragraphs>
        {details.map((paragraph) => {
          return <Paragraph key={_.uniqueId("chapter")}>{paragraph}</Paragraph>;
        })}
      </Paragraphs>
    </Section>
  );
};

export default Content;
