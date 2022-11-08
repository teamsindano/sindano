import styled from 'styled-components';
import Source from './Source';
import React from 'react';

/**
 * Stat Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

const Container = styled.figure`
  margin: 0;
  background-color: ${(props) => props.theme.colors.default_component_blue};
  color: ${(props) => props.theme.colors.alt_text_white};
  height: 283px;
  width: 290px;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  padding-top: 70px;
  position: relative;
`;

const Number = styled.h4`
  margin: 0;
  font: ${(props) => props.theme.fonts.header.font_family};
  font-size: ${(props) => props.theme.fonts.header.sizes.header_l};
  font-weight: ${(props) => props.theme.fonts.header.weight};
  line-height: 0.93;
`;
const Caption = styled.figcaption`
  margin: 0;
  font: ${(props) => props.theme.fonts.text.font_family};
  font-size: ${(props) => props.theme.fonts.text.sizes.text_m};
  font-weight: ${(props) => props.theme.fonts.text.weights.semi_bold};
  line-height: 1.25;
  max-width: 258px;
`;

const Icon = styled.button`
  margin: 0;
  font: ${(props) => props.theme.fonts.text.font_family};
  font-size: ${(props) => props.theme.fonts.text.sizes.text_m};
  font-weight: ${(props) => props.theme.fonts.text.weights.semi_bold};
  line-height: 1.25;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.alt_text_white};
  position: absolute;
  bottom: 16px;
  right: 20px;
`;

const SourceContainer = styled.div`
  position: absolute;
  top: 290px;
`;

const Stat = ({ number, caption }) => {
  const [isSourceOpen, setIsSourceOpen] = React.useState(false);
  const sourceInfo =
    'Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S.';

  function handleIconClick() {
    setIsSourceOpen(!isSourceOpen);
  }

  return (
    <Container>
      <Number>{number}</Number>
      <Caption>{caption}</Caption>
      <Icon onClick={handleIconClick}> ⓘ </Icon>
      {isSourceOpen && (
        <SourceContainer>
          <Source info={sourceInfo} />
        </SourceContainer>
      )}
    </Container>
  );
};

export default Stat;
