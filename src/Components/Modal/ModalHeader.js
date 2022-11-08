import styled from "styled-components";
import closeIcon from '../../Images/close-item.png';
import { useContext } from "react";
import { ModalContext } from "./ModalWrapper";


/**
 * Modal Header Component
 * @author [Peter Staal](https://github.com/pstaal)
 */


const ModalHeaderDiv = styled.div`
   padding: 0;
   margin: 0;
   margin-bottom: 32px;
   display:flex;
   justify-content: space-between;
`;


const ModalHeaderTitle = styled.h2`
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 52px;
    line-height: 1;
    color: #283592;
`;

const ModalHeaderButton = styled.button`
    border: none;
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    margin-right: 14px;
    background: transparent;
    background-image: url(${closeIcon});
    background-repeat: no-repeat;
    background-position: center center; 
    align-self: center;
`;


function ModalHeader({text}) {
    
    const { closeModal } = useContext(ModalContext);

    return (
        <ModalHeaderDiv>
            <ModalHeaderTitle>Blablabla</ModalHeaderTitle>
            <ModalHeaderButton onClick={closeModal}/>
        </ModalHeaderDiv>
    );
};

export default ModalHeader;