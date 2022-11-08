import styled from 'styled-components';

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
  font: ${(props) => props.theme.fonts.header.font_family};
  font-size: ${(props) => props.theme.fonts.header.sizes.header_s_default};
  font-weight: ${(props) => props.theme.fonts.header.weight};
  color: ${(props) => props.theme.colors.default_component_blue};
  line-height: 1;
`;

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const Paragraph = styled.p`
  margin: 0;
  font: ${(props) => props.theme.fonts.text.font_family};
  font-size: ${(props) => props.theme.fonts.text.sizes.text_l_default};
  font-weight: ${(props) => props.theme.fonts.text.weights.normal};
  line-height: 1.5;
`;

const Content = ({ header, details }) => {
  return (
    <Section>
      <Title>{header}</Title>
      <Paragraphs>
        {details.map((paragraph) => {
          return <Paragraph>{paragraph}</Paragraph>;
        })}
      </Paragraphs>
    </Section>
  );
};

export default Content;
