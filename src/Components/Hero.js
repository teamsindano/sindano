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
  margin-bottom: 140px;
  @media screen and (max-width: 1024px) {
    height: 468px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 100px;
  }
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-family: ${(props) => `${props.theme.fonts.header.font_family}`};
  font-size: ${(props) => `${props.theme.fonts.header.sizes.header_l}`};
  font-weight: ${(props) => `${props.theme.fonts.header.weight}`};
  color: ${(props) => props.theme.colors.alt_text_white};
  z-index: 3;
  position: absolute;
  margin-left: 5%;
  bottom: 0;
  @media screen and (max-width: 1024px) {
    font-size: ${(props) => `${props.theme.fonts.header.sizes.header_m}`};
  }
  @media screen and (max-width: 375px) {
    font-size: ${(props) => `${props.theme.fonts.header.sizes.header_xs}`};
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
