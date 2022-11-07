import React, { useContext } from "react";
import DataWrapper from '../Data/DataWrapper';
import styled from "styled-components";
import { UnfoldContext } from "./Unfold";

const UnfoldContentDiv = styled.div`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  ${(props) => {
    if (props.openedItem === props.id) {
      return `
                opacity: 1;
                max-height: 1000px;
                margin-top: 32px;
                transition: max-height 1s ease-in-out;
            `;
    } else {
      return ``;
    }
  }}
`;

const UnfoldText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 16px;
`;

const UnfoldButton = styled.button`
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  white-space: nowrap;
  width: 170px;
  height: 50px;
  color: #fff;
  background-color: #ec1e7b;
  padding: 15px 28px;
  border: none;
  margin: 0;
  margin-top: 52px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.gradients.button_hover};
  }
`;

function UnfoldContent({ id, text }) {
  const { activeItem } = useContext(UnfoldContext);
  return (
    <UnfoldContentDiv openedItem={activeItem} id={id}>
      <div>
        {text.map((paragraph) => {
          return <UnfoldText>{paragraph}</UnfoldText>;
        })}
        <UnfoldButton>Request a call</UnfoldButton>
      </div>
      <div>
        <DataWrapper unfoldId={id}/>
      </div>
    </UnfoldContentDiv>
  );
}

export default UnfoldContent;