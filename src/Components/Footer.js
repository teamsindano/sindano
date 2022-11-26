import React from 'react';
import whiteLogo from '../Images/sindano_health_logo_white.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { sectionVariants } from '../utils/animationVariants';
import { data } from '../utils/data';

/**
 * Footer Section
 * @author [Ekaterina Cratcha](https://github.com/cratcha) */

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.footer_background};
  color: ${(props) => props.theme.colors.alt_text_white};
  font-family: ${(props) => props.theme.fonts.text.font_family};
  font-size: ${(props) => props.theme.fonts.text.sizes.text_m};
  font-weight: ${(props) => props.theme.fonts.text.weights.semi_bold};
  line-height: 20px;
  margin: auto;
  width: 100%;
  p,
  a {
    margin: 0;
    color: white;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto 0;
  padding: 40px 80px;
  max-width: 1440px;
  min-height: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    padding: 40px 40px 44px 80px;
  }
  @media screen and (max-width: 895px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 60px;
  }
  @media screen and (max-width: 465px) {
    padding-left: 16px;
  }
`;
const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 455px;
  @media screen and (max-width: 895px) {
    div {
      display: none;
    }
  }
`;

const Logo = styled.img`
  height: 58px;
  width: 132px;
  @media screen and (max-width: 465px) {
    height: 48px;
    width: 110px;
  }
`;
const SecondColumn = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 40px;
  @media screen and (max-width: 895px) {
    margin-left: 0px;
  }
`;
const Navigation = styled.ul`
  list-style: none;
  width: 169px;
  margin: 0;
  padding: 0;
  li {
    margin-top: 10px;
  }
`;

const ThirdColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 205px;
  margin-left: 161px;
  width: 250px;
  p {
    margin-top: 10px;
  }
  @media screen and (max-width: 1024px) {
    margin-right: 20px;
    margin-left: 159px;
  }
  @media screen and (max-width: 895px) {
    margin: 0px;
  }
`;
const FooterSocials = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  a {
    padding-right: 32px;
  }
  @media screen and (max-width: 465px) {
    margin-bottom: 58px;
  }
`;

const SmCopyright = styled.div`
  @media screen and (min-width: 896px) {
    display: none;
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter
      as={motion.footer}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <Wrapper>
        <FirstColumn>
          <Logo src={whiteLogo} alt="Sindano logo"></Logo>
          <div>
            <p>Copyright &copy; {currentYear} Sindano&#8482;</p>
            <p>All Rights Reserved</p>
          </div>
        </FirstColumn>
        <SecondColumn>
          <Navigation>
            {data.footer.navigation.map((arrItem, index) => (
              <li key={index}>
                <a href={arrItem.link}>{arrItem.name}</a>
              </li>
            ))}
          </Navigation>
        </SecondColumn>
        <ThirdColumn>
          <FooterSocials>
            {data.footer.social.map((arrItem, index) => (
              <li key={index}>
                <a href={arrItem.link}>
                  <img src={arrItem.image} alt="instagram icon"></img>
                </a>
              </li>
            ))}
          </FooterSocials>
          <div>
            <p>(555)555-1234</p>
            <p>hello@sindanohealth.com</p>
            <p>2748 Callison Lane, Newark, DE</p>
          </div>
        </ThirdColumn>
        <SmCopyright>
          <p>Copyright &copy; {currentYear} Sindano&#8482;</p>
          <p>All Rights Reserved</p>
        </SmCopyright>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
