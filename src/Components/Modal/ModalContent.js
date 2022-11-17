import ModalForm from './ModalForm';
import ModalSuccess from './ModalSuccess';

/**
 * Modal Content Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

function ModalContent({ isModalConfirmation, handleSuccess }) {
  return (
    <>
      {isModalConfirmation ? (
        <ModalSuccess />
      ) : (
        <ModalForm handleSuccess={handleSuccess} />
      )}
    </>
  );
}

export default ModalContent;
