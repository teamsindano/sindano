import React, { useContext } from "react";
import Data from "../Data/Data";
import styled from "styled-components";
import { UnfoldContext } from "./Unfold";
import { AnimatePresence, motion } from "framer-motion";
import renderData from "../../utils/renderData";
import PrimaryButton from "../PrimaryButton";
import _ from "lodash";
import { ModalContext } from "../App";

/**
 * Unfold Content Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const UnfoldContentDiv = styled(motion.div)`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
 
  @media screen and (max-width: 950px){
    flex-direction: column;
    align-items: center;
  }
`;

const UnfoldText = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.families.text};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 40px;
  }
`;


const ButtonDiv = styled.div`
  @media screen and (max-width: 950px){
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }


`;

function UnfoldContent({ item }) {
  const { activeItem } = useContext(UnfoldContext);
  const { openModal } = useContext(ModalContext);

  return (
    <AnimatePresence>
         {activeItem === item.id && (
          <>
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
     <div>
            {item.text.map((paragraph) => {
              return (
                <UnfoldText key={_.uniqueId("paragraph-")}>
                  {paragraph}
                </UnfoldText>
              );
            })}
            
          </div>
          <div>
            <Data>{renderData(item.id)}</Data>
          </div>
        </UnfoldContentDiv>
        <ButtonDiv>
          <PrimaryButton onClick={openModal} label="Request a call"/>
        </ButtonDiv>
        </>
      )}
    </AnimatePresence>
  );
}

export default UnfoldContent;
