import React from 'react';
import styled from 'styled-components';
import background from '../Images/hero_photo.png';
import overlay from '../Images/hero_photo_overlay.svg';
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
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  z-index: 1;
  position: absolute;
  width: 100%;
`;
const OverlayImage = styled.img`
  z-index: 2;
  position: absolute;
  width: 100%;
`;

const Blur = styled.div`
      position: absolute;
      top: -20px;
      left: -150px;
      width: 1612px;
      height: 760px;
      background-image: linear-gradient(0deg, rgba(255, 252, 170, 0.1), rgba(255, 252, 170, 0.1)), radial-gradient(110.58% 110.58% at 40.19% 148.08%, rgba(40, 53, 146, 0.5) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(141.03% 3248.2% at 71.91% -110.26%, #FF98C6 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(93.91% 3215.11% at 1.53% 100%, #DBCCE5 0%, #FFFFFF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
      filter: blur(77px);
      border-radius: 60px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
      z-index: -1;
`;


const Title = styled.h1`
  font-family: ${(props) => `${props.theme.fonts.header.font_family}`};
  font-size: ${(props) => `${props.theme.fonts.header.sizes.header_m}`};
  font-weight: ${(props) => `${props.theme.fonts.header.weight}`};
  color: ${(props) => props.theme.colors.alt_text_white};
  background: radial-gradient(
    circle farthest-corner at top center,
    #f2c9d8 0%,
    #ffede3 60%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 3;
  position: absolute;
  margin-left: 5%;
  margin-top: 36%;
`;

function Hero() {
  return (
    <HeroWrapper
      as={motion.section}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <Blur/>
      <BackgroundImage
        src={background}
        alt="background photo of two women lying on the ground and holding hands"
      ></BackgroundImage>
      <OverlayImage src={overlay} alt="overlay design"></OverlayImage>
      <Title>
        Empowering Insights <br></br>for Equitable Mental Healthcare
      </Title>
    </HeroWrapper>
  );
}

export default Hero;
