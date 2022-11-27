import styled from 'styled-components';
import React from 'react';

/**
 * Source Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */


const Container = styled.figure`
  visibility: hidden;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${(props) => props.theme.colors.white_text_color};
  width: 290px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  z-index: 10;
  position: absolute;
  bottom: -65px;
  right: 0;
  z-index: 2;
`;

const Info = styled.p`
  margin: 0;
  font: ${(props) => props.theme.fonts.font_families.text};
  font-size: ${(props) => props.theme.fonts.sizes.text_xs};
  font-weight: ${(props) => props.theme.fonts.weights.semi_bold};
  line-height: 1.33;
`;

const Icon = styled.button`
cursor: pointer;
margin: 0;
font: ${(props) => props.theme.fonts.font_families.text};
font-size: ${(props) => props.theme.fonts.sizes.text_m};
font-weight: ${(props) => props.theme.fonts.weights.semi_bold};
line-height: 1.25;
background-color: transparent;
border: none;
color: ${(props) => props.fontColor};
position: absolute;
bottom: 16px;
right: 20px;
&:hover + ${Container} {
  visibility: visible;
}
`;



const Source = ({ info, fontColor }) => {

  return (
    <>
      <Icon fontColor={fontColor}> ⓘ </Icon>
          <Container>
            <Info>{info}</Info>
          </Container>
    </>
  )
};

export default Source;
