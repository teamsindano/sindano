import React, { useContext } from "react";
import Data from "../Data/Data";
import styled from "styled-components";
import { UnfoldContext } from "./Unfold";
import { AnimatePresence, motion } from "framer-motion";
import renderData from "../../utils/renderData";
import PrimaryButton from "../PrimaryButton";
import _ from "lodash";
<<<<<<< HEAD

=======
>>>>>>> 01289dd6318c7175aa577db53ea7e03f7f87729d

/**
 * Unfold Content Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const UnfoldContentDiv = styled(motion.div)`
  display: flex;
  flex-direction: row;
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
<<<<<<< HEAD
         {activeItem === item.id && (
=======
      {activeItem === item.id && (
>>>>>>> 01289dd6318c7175aa577db53ea7e03f7f87729d
        <UnfoldContentDiv
          key={_.uniqueId("Unfold-")}
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
            transition: {
              height: {
                duration: 0.5,
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
                duration: 0.5,
              },
              opacity: {
                duration: 0.25,
              },
            },
          }}
        >
<<<<<<< HEAD
     <div>
=======
          <div>
>>>>>>> 01289dd6318c7175aa577db53ea7e03f7f87729d
            {item.text.map((paragraph) => {
              return (
                <UnfoldText key={_.uniqueId("paragraph-")}>
                  {paragraph}
                </UnfoldText>
              );
            })}
            <PrimaryButton />
          </div>
          <div>
            <Data>{renderData(item.id)}</Data>
          </div>
        </UnfoldContentDiv>
      )}
    </AnimatePresence>
  );
}

export default UnfoldContent;
