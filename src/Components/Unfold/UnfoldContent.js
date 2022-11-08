import React, { useContext } from "react";
import Data from '../Data/Data';
import styled from "styled-components";
import { UnfoldContext } from "./Unfold";
import { AnimatePresence, motion } from "framer-motion";
import renderData from "../../utils/renderData";
import DataButton from "../Data/DataButton";

/**
 * Unfold Content Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const UnfoldContentDiv = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
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
    <AnimatePresence>
    { (activeItem === id) && (<UnfoldContentDiv key="id"
        initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: {
                    duration: 1,
                  },
                  opacity: {
                    duration: 1,
                  },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 1,
                  },
                  opacity: {
                    duration: 1,
                  },
                },
              }}
        >
      <div>
        {text.map((paragraph) => {
          return <UnfoldText>{paragraph}</UnfoldText>;
        })}
        <UnfoldButton>Request a call</UnfoldButton>
      </div>
      <div>
        <Data>
          {renderData(id)}
          <DataButton/>
        </Data>
      </div>
    </UnfoldContentDiv>)
    }
  </AnimatePresence>
  );
}

export default UnfoldContent;