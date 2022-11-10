import React from 'react';
import styled from 'styled-components';
import background from '../images/hero_photo.png';
import overlay from '../images/hero_photo_overlay.svg';

/** @author [Ekaterina Cratcha](https://github.com/cratcha) */

const HeroWrapper = styled.section`
  max-width: 1440px;
  width: 100%;
  position: relative;
  margin: auto;
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
    <HeroWrapper>
      <BackgroundImage src={background} alt=""></BackgroundImage>
      <OverlayImage src={overlay} alt=""></OverlayImage>
      <Title>
        Empowering Insights <br></br>for Equitable Mental Healthcare
      </Title>
    </HeroWrapper>
  );
}

export default Hero;
