import React, { useState, createContext } from "react";
import _ from "lodash";
import Theme from "./Theme";
import { data } from "../utils/data";
import styled from "styled-components";
<<<<<<< HEAD
import Unfold from './Unfold/Unfold';
import Stat from './Stat';
import Title from './Title';
import Hero from './Hero';
import Footer from './Footer';
import Faq from './Faq';
import ChartSection from './ChartSection';
import Insights from './Insights';
import WorkSection from './WorkSection';
import ModalWrapper from './Modal/ModalWrapper';
import ModalHeader from './Modal/ModalHeader';
import ModalContent from './Modal/ModalContent';
import _ from "lodash";
import Header from './Header';
=======
import Unfold from "./Unfold/Unfold";
import Stat from "./Stat";
import Title from "./Title";
import Hero from "./Hero";
import Footer from "./Footer";
import Faq from "./Faq";
import ChartSection from "./ChartSection";
import Insights from "./Insights";
import WorkSection from "./WorkSection";
import ModalWrapper from "./Modal/ModalWrapper";
import ModalHeader from "./Modal/ModalHeader";
import ModalContent from "./Modal/ModalContent";
>>>>>>> 01289dd6318c7175aa577db53ea7e03f7f87729d

const Page = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
`;

const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 160px;
`;

export const ModalContext = createContext();

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalConfirmation, setIsModalConfirmation] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalConfirmation(false);
  };

  const handleSuccess = () => {
    setIsModalConfirmation(true);
  };

  return (
    <Theme>
      <ModalContext.Provider value={{ openModal }}>
        <Page>
<<<<<<< HEAD
          <Header/>
          <Hero/>
          <Title text="The Mental Health Crisis in LGBTQ+ Communities is an Economic Crisis for America" marginBottom={80}/>
=======
          <Hero />
          <Title
            text="The Mental Health Crisis in LGBTQ+ Communities is an Economic Crisis for America"
            marginBottom={80}
          />
>>>>>>> 01289dd6318c7175aa577db53ea7e03f7f87729d
          <StatsContainer>
            {data.statsCards.map((card) => {
              return (
                <Stat
                  id={card.id}
                  key={card.id}
                  source={card.source}
                  cardHeader={card.cardHeader}
                  cardText={card.cardText}
                />
              );
            })}
          </StatsContainer>
<<<<<<< HEAD
          <Insights/>
          <ChartSection/>
          <Title text="What We Do" marginBottom={40}/>
=======
          <Insights />
          <ChartSection />
          <Title text="What We Do" marginBottom={40} />
>>>>>>> 01289dd6318c7175aa577db53ea7e03f7f87729d
          <Unfold>
            {data.whatWeDoCard.map((item) => (
              <Unfold.Wrapper key={_.uniqueId("Unfold-Block-")}>
                <Unfold.Header item={item} />
                <Unfold.Content item={item} />
              </Unfold.Wrapper>
            ))}
          </Unfold>
<<<<<<< HEAD
        <WorkSection/>
        <Faq/>
        <Footer/>
        <ModalWrapper isModalOpen={isModalOpen} closeModal={closeModal}>
            <ModalHeader closeModal={closeModal} isModalConfirmation={isModalConfirmation} />
            <ModalContent isModalConfirmation={isModalConfirmation} handleSuccess={handleSuccess}/>
        </ModalWrapper>
=======
          <WorkSection />
          <Faq />
          <Footer />
          <ModalWrapper isModalOpen={isModalOpen} closeModal={closeModal}>
            <ModalHeader
              closeModal={closeModal}
              isModalConfirmation={isModalConfirmation}
            />
            <ModalContent
              isModalConfirmation={isModalConfirmation}
              handleSuccess={handleSuccess}
            />
          </ModalWrapper>
>>>>>>> 01289dd6318c7175aa577db53ea7e03f7f87729d
        </Page>
      </ModalContext.Provider>
    </Theme>
  );
}

export default App;
