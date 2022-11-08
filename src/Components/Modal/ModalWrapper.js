import React, { createContext, useState} from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Modal Wrapper Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const ModalPage = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
`;


const ModalContainer = styled(motion.div)`
    width: 619px;
    padding: 40px;
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
`;

export const ModalContext = createContext();

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }

}

function ModalWrapper({ children }) {

    const [isOpen, setIsOpen] = useState(true);

    const openModal = () => {
     setIsOpen(true)
    };
  
    const closeModal = () => {
      setIsOpen(false)
     };
  
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
        <AnimatePresence>
            {isOpen && (<ModalPage 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ModalContainer 
                    key="modal"
                    variants={dropIn} 
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                    {children}
                </ModalContainer>
            </ModalPage>)}
        </AnimatePresence>
    </ModalContext.Provider>
  );
}

export default ModalWrapper;