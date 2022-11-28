import styled from 'styled-components';
import closeIcon from '../../Images/close-icon.png';

/**
 * Modal Header Component
 * @author [Peter Staal](https://github.com/pstaal)
 */

const ModalHeaderDiv = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
`;

const ModalHeaderTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.header.font_family[0]};
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 52px;
  line-height: 1;
  color: ${(props) => props.theme.colors.default_component_blue};
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

function ModalHeader({ closeModal, isModalConfirmation }) {
  const title = isModalConfirmation ? 'Thank you!' : 'Request a call';

  return (
    <ModalHeaderDiv>
      <ModalHeaderTitle>{title}</ModalHeaderTitle>
      <ModalHeaderButton onClick={closeModal} />
    </ModalHeaderDiv>
  );
}

export default ModalHeader;
