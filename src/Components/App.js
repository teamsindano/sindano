import Theme from "./Theme";
import styled from "styled-components";
import ModalWrapper from "./Modal/ModalWrapper";
import ModalHeader from "./Modal/ModalHeader";
import ModalContent from "./Modal/ModalContent";


const Page = styled.div`
  width: 1280px;
    margin: 0 auto;
    padding: 0 80px;
`;

function App() {
  return (
    <>
      <Theme>
        <Page>
          <ModalWrapper>
            <ModalHeader/>
            <ModalContent/>
          </ModalWrapper>
        </Page>
      </Theme>
    </>
  );
}

export default App;
