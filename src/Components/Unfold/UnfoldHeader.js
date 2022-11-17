import { ReactComponent as Arrow } from "../../Images/downward-arrow.svg";
import React, { useContext } from "react";
import styled from "styled-components";
import { UnfoldContext } from "./Unfold";

/**
 * Unfold Header Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const HeaderButton = styled.button`
  width: 28px;
  height: 14px;
  padding: 0;
  border: 0;
  margin: 0;
  background: none;
  align-self: center;
  transition: 0.5s;
  :hover {
    margin-top: 10px;
  }
  ${(props) => {
    if (props.openedItem === props.id) {
      return `
            transform-origin: center;
            transform: rotate(-180deg);
            margin-top: 10px;
        `;
    } else {
      return ``;
    }
  }}
`;

const Header = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const HeaderTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  padding: 0;
  margin: 0;
  font-weight: ${(props) => `props.theme.fonts.text.weights.black`};
  font-size: ${(props) => `props.theme.fonts.text.sizes.text_l_default`};
  line-height: 1.5;
  color: ${(props) => props.theme.colors.alt_text_white`};
`;

function UnfoldHeader({ item }) {
  const { activeItem, handleClick } = useContext(UnfoldContext);
  return (
    <Header onClick={() => handleClick(item.id)}>
      <HeaderTitle>{item.cardTitle}</HeaderTitle>
      <HeaderButton openedItem={activeItem} id={item.id}>
        <Arrow />
      </HeaderButton>
    </Header>
  );
}

export default UnfoldHeader;
