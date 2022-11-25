
import ModalForm from "./ModalForm";
import ModalSuccess from "./ModalSuccess";

/**
 * Modal Content Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

// ******* RECOMMENDATION *********
// I think this component isn't necessary-- you could easily just move the ternary to App.js and eliminate this file
function ModalContent ({isModalConfirmation, handleSuccess}) {

    return (
        <>
         {isModalConfirmation ? <ModalSuccess/> : <ModalForm handleSuccess={handleSuccess}/>}
        </>
    )

};

export default ModalContent;