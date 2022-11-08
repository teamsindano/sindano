import React, { useContext } from "react";
import { UnfoldContext } from "./Unfold";
import styled from "styled-components";

/**
 * Unfold Wrapper Component
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


const UnfoldWrapperDiv = styled.div`
  margin: 0;
  padding: 40px;
  background: #283592;
  border-radius: 20px;
  margin-bottom: 40px;
  &:hover ${HeaderButton} {
    margin-top: 10px;
  }
`;



function UnfoldWrapper({ id, children }) {
  const { handleClick } = useContext(UnfoldContext);

  return (
    <UnfoldWrapperDiv onClick={() => handleClick(id)}>{children}</UnfoldWrapperDiv>
  );
}

export default UnfoldWrapper;