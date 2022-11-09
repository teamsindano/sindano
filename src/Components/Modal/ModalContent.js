import { useContext } from "react";
import { ModalContext } from "./ModalWrapper";
import ModalForm from "./ModalForm";
import ModalSuccess from "./ModalSuccess";

/**
 * Modal Content Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

function ModalContent () {

    const {isConfirmation } = useContext(ModalContext)

    return (
        <>
         {isConfirmation ? <ModalSuccess/> : <ModalForm/>}
        </>
    )

};

export default ModalContent;