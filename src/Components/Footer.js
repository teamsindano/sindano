import React from 'react';
import whiteLogo from '../images/sindano_health_logo_white.svg';
import instagram from '../images/social/icon_instagram.svg';
import twitter from '../images/social/icon_twitter.svg';
import facebook from '../images/social/icon_facebook.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { sectionVariants } from '../utils/animationVariants';

/**
 * Footer Section
 * @author [Ekaterina Cratcha](https://github.com/cratcha) */

 // Height mis-spelled in a few places in this file
const StyledFooter = styled.footer`
  max-width: 1440px;
  margin: auto;
  background: ${(props) => `${props.theme.colors.footer_background}`};
  color: ${(props) => `${props.theme.colors.alt_text_white}`};
  width: 100%;
  font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
  font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
  font-weight: ${(props) => `${props.theme.fonts.text.weights.semi_bold}`};
  line-hight: 20px;
`;

// ******* RECOMMENDATION *********
// See if you can reduce the amount of CSS you're writing in cases like this by
// applying broad rules to things at higher levels. For instance, you could eliminate a few lines
// or even entire styled components by adding the following rules to StyledFooter:
// ul, p, a {
//   margin: 0;
//   color: white;
// }
// a {
//   text-decoration: none;
// }
// ul {
//   list-style: none;
// }
// Try and apply this kind of thinking to other component groups as well.

const Wrapper = styled.div`
  padding: 40px 80px;
  min-height: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.img`
  hight: 58px;
  width: 132px;
`;
const SecondColumn = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Navigation = styled.ul`
  list-style: none;
  margin: 0;
`;

const ListItem = styled.li`
  margin-top: 10px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
`;
const ThirdColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 285px;
`;
const FooterSocials = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
`;
const SocialLink = styled.a`
  text-decoration: none;
  padding-right: 32px;
`;
const ContactItem = styled.p`
  margin: 0;
  margin-top: 10px;
`;
const CopyrightItem = styled.p`
  margin: 0;
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
            <CopyrightItem>
              Copyright &copy; {currentYear} Sindano&#8482;
            </CopyrightItem>
            <CopyrightItem>All Rights Reserved</CopyrightItem>
          </div>
        </FirstColumn>
        <SecondColumn>
          <Navigation>
            {/* For things like this, it can be nice to make an array of objects representing
            each link and then map over it instead of listing them all out, just to save space.
            Same thing for the socials and contacts below */}
            <ListItem>
              <FooterLink href="#ourstory">About</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink href="#whatwedo">What we do</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink href="#faq">FAQ</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink href="#">Privacy</FooterLink>
            </ListItem>
            <ListItem>
              <FooterLink href="#">Terms and conditions</FooterLink>
            </ListItem>
          </Navigation>
        </SecondColumn>
        <ThirdColumn>
          <FooterSocials>
            <li>
              <SocialLink href="#">
                <img src={instagram} alt="instagram icon"></img>
              </SocialLink>
            </li>
            <li>
              <SocialLink href="#">
                <img src={twitter} alt="twitter icon"></img>
              </SocialLink>
            </li>
            <li>
              <SocialLink href="#">
                <img src={facebook} alt="facebook icon"></img>
              </SocialLink>
            </li>
          </FooterSocials>
          <div>
            <ContactItem>(555)555-1234</ContactItem>
            <ContactItem>hello@sindanohealth.com</ContactItem>
            <ContactItem>2748 Callison Lane, Newark, DE</ContactItem>
          </div>
        </ThirdColumn>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
