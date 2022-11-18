import React from 'react';
import styled from 'styled-components';
import background from '../images/hero_photo.png';
import { motion } from 'framer-motion';
import { sectionVariants } from '../utils/animationVariants';

/** Hero Section
 *  @author [Ekaterina Cratcha](https://github.com/cratcha) */

const HeroWrapper = styled.section`
  max-width: 1440px;
  width: 100%;
  position: relative;
  margin: auto;
  height: 695px;
  @media screen and (max-width: 1050px) {
    height: 468px;
  }
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  z-index: 1;
  position: absolute;
  width: 100%;
  border-radius: 12px;
  @media screen and (max-width: 400px) {
    height: 468px;
    object-fit: cover;
  }
`;

const Title = styled.h1`
  font-family: ${(props) => `${props.theme.fonts.header.font_family}`};
  font-size: ${(props) => `${props.theme.fonts.header.sizes.header_l}`};
  font-weight: ${(props) => `${props.theme.fonts.header.weight}`};
  color: ${(props) => props.theme.colors.alt_text_white};
  z-index: 3;
  position: absolute;
  margin-left: 5%;
  margin-top: 35%;
  @media screen and (max-width: 1210px) {
    font-size: ${(props) => `${props.theme.fonts.header.sizes.header_m}`};
  }
  @media screen and (max-width: 865px) {
    font-size: ${(props) => `${props.theme.fonts.header.sizes.header_xs}`};
    margin-top: 30%;
  }
  @media screen and (max-width: 650px) {
    margin-top: 25%;
  }
  @media screen and (max-width: 400px) {
    margin-top: 70%;
  }
`;

function Hero() {
  return (
    <HeroWrapper
      as={motion.section}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <BackgroundImage
        src={background}
        alt="background photo of two women lying on the ground and holding hands"
      ></BackgroundImage>
      <Title>
        Empowering Insights <br></br>for Equitable Mental Healthcare
      </Title>
    </HeroWrapper>
  );
}

export default Hero;
