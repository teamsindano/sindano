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
    ${'' /* visibility: hidden;
    opacity: 0;
    transition: opacity ease-out 0.5s, visibility 0s ease-out 0.5s; */}
`;


const ModalContainer = styled.div`
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
                key="modal"
                initial={{ opacity: 0, visibility: 'hidden'}}
                animate={{ 
                    opacity: 1, 
                    visibility: 'visible',
                    transition: {
                        visibility: {
                        duration: 1,
                        },
                        opacity: {
                        duration: 1,
                        },
                        }
                    }}
                exit={{
                    opacity: 0, 
                    visibility: 'hidden',
                    transition: {
                        visibility: {
                        duration: 1,
                        },
                        opacity: {
                        duration: 1,
                        },
                    }
                    }}>
                <ModalContainer>
                    {children}
                </ModalContainer>
            </ModalPage>)}
        </AnimatePresence>
    </ModalContext.Provider>
  );
}

export default ModalWrapper;