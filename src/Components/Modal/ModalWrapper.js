import React, { createContext, useState} from "react";
import styled from "styled-components";

/**
 * Modal Wrapper Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const ModalPage = styled.div`
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
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
`;

const ModalContext = createContext();

function ModalWrapper({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
     setIsOpen(true)
    };
  
    const closeModal = () => {
      setIsOpen(false)
     };
  
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
        <ModalPage>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ModalPage>
    </ModalContext.Provider>
  );
}

export default ModalWrapper;