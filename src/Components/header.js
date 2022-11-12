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
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;
export const StyledNav = styled.nav``;

function Header() {
  return (
    <HeaderStyle>
      <LogoImage src={headerLogo} alt="Sindano logo"></LogoImage>

      <StyledNav>
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
      </StyledNav>

      <Button>Request a call</Button>
    </HeaderStyle>
  );
}
export default Header;
