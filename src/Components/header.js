import React from 'react';
import styled from 'styled-components';
import headerLogo from '../images/sindano_health_logo_black.svg';
import Button from './Button.js';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  max-width: 1440px;
`;

export const LogoImage = styled.img`
  padding: 13px 0 23px 47px;
  margin-right: auto;
`;
export const StyledList = styled.ul`
  display: inline-block;
  text-decoration: none;
`;
export const StyledIcons = styled.li`
  text-decoration: none;
  list-style: none;
  display: inline-block;
  padding: 0 32px 0 0;
`;

export const StyledLinks = styled.a`
  text-decoration: none;
  font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
  font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
  font-weight: ${(props) => `${props.theme.fonts.text.weights.bold}`};
  color: ${(props) => `${props.theme.colors.default_text_color}`};
  line-height: 20px;
`;

function Header() {
  return (
    <HeaderStyle>
      <LogoImage src={headerLogo} alt="Sindano logo"></LogoImage>

      <nav>
        <StyledList>
          <StyledIcons>
            <StyledLinks href="#">About</StyledLinks>
          </StyledIcons>
          <StyledIcons>
            <StyledLinks href="#">What we do</StyledLinks>
          </StyledIcons>
          <StyledIcons>
            <StyledLinks href="#">FAQ</StyledLinks>
          </StyledIcons>
        </StyledList>
      </nav>

      <Button>Request a call</Button>
    </HeaderStyle>
  );
}
export default Header;
