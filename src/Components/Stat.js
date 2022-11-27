import styled from 'styled-components';
import Source from './Source';
import React from 'react';
import { motion } from "framer-motion";

/**
 * Stat Component
 * @author [J. Hartsek](https://github.com/JHartsek)
 */

const Container = styled(motion.figure)`
  margin: 0;
  background-color: ${(props) => props.theme.colors.blue_component_color};
  color: ${(props) => props.theme.colors.white_text_color};
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
  font-family: ${(props) => props.theme.fonts.font_families.header};
  font-size: ${(props) => props.theme.fonts.sizes.header_l};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  line-height: 0.93;
`;
const Caption = styled.figcaption`
  margin: 0;
  font-family: ${(props) => props.theme.fonts.font_families.text};
  font-size: ${(props) => props.theme.fonts.sizes.text_m};
  font-weight: ${(props) => props.theme.fonts.weights.semi_bold};
  line-height: 1.25;
  max-width: 258px;
`;



const variants = {
  offscreen: { y: 200, opacity: 0},
  onscreen: { y: 0, opacity: 1},
}

const Stat = ({ id, cardHeader, cardText, source }) => {
 

  const delay = id * 0.7;

  return (
    <Container
        initial="offscreen"
        whileInView="onscreen"
        variants={variants}
        transition={{ duration: 1, delay: delay}}
        viewport={{ once: true }}
     >
      <Number>{cardHeader}</Number>
      <Caption>{cardText}</Caption>
      <Source info={source} fontColor={"#fff"}/>
    </Container>
  );
};

export default Stat;
