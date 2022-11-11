import React, { useContext } from "react";
import Data from '../Data/Data';
import styled from "styled-components";
import { UnfoldContext } from "./Unfold";
import { AnimatePresence, motion } from "framer-motion";
import renderData from "../../utils/renderData";
import PrimaryButton from "../PrimaryButton";


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
  &:last-of-type {
    margin-bottom: 40px;
  }
`;

function UnfoldContent({ item }) {
  const { activeItem } = useContext(UnfoldContext);
  return (
    <AnimatePresence>
    { (activeItem === item.id) && (<UnfoldContentDiv key={item.id}
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
        {item.text.map((paragraph) => {
          return <UnfoldText key={item.id}>{paragraph}</UnfoldText>;
        })}
        <PrimaryButton/>
      </div>
      <div>
        <Data>
          {renderData(item.id)}
        </Data>
      </div>
    </UnfoldContentDiv>)
    }
  </AnimatePresence>
  );
}

export default UnfoldContent;