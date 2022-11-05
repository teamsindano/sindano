import styled from 'styled-components';

/**
 * Stats Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

const Section = styled.section`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  row-gap: 80px;
`;

const Title = styled.h2`
  margin: 0;
  font: ${(props) => props.theme.fonts.header.font_family};
  font-size: ${(props) => props.theme.fonts.header.sizes.header_s_default};
  font-weight: ${(props) => props.theme.fonts.header.weight};
  color: ${(props) => props.theme.colors.default_component_blue};
  line-height: 1;
  max-width: 950px;
  padding-left: calc((100vw - 1280px) / 2);
`;
const Cards = styled.div`
  margin: 0;
  padding-left: calc((100vw - 1280px) / 2);
  display: flex;
  column-gap: 40px;
`;
const Stats = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Cards>{children}</Cards>
    </Section>
  );
};

export default Stats;
