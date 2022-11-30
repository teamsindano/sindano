import React, { useState, createContext } from 'react';
import _ from 'lodash';
import Theme from './Theme';
import { data } from '../utils/data';
import styled from 'styled-components';
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
import Form from './Modal/Form';
import ModalSuccess from './Modal/ModalSuccess';
import Header from './Header';
import OurStory from './OurStory';

/**
 * 
 * Adjustments: @author [Sam](https://github.com/Samm96)
 *
 */

const PageWrapper = styled.div`
  max-width: 1440px;
  min-width: 375px;
  padding: 0 20px 0;
  margin: 0 auto 0;
  @media (max-width: 1024px) {
    padding: 0 41px 0;
  }

  @media (max-width: 375px) {
    padding: 0 10px 0;
  }

  &.stats__wrapper {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto 0;
    padding: 0;

    @media (max-width: 375px) {
      margin: 0 auto 100px;
    }
  }
`;

const Page = styled.div`
  max-width: 1280px;
  min-width: 375px;
  width: 100%;
  margin: 0;
  padding: 0 0 0 60px;

  @media screen and (max-width: 1350px) {
    width: calc(100vw - 80px);
    padding: 0;
  }
  @media screen and (max-width: 375px) {
    width: calc(100vw - 32px);
    padding: 0 6px;
  }
`;

const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin-bottom: 180px;
  flex-wrap: wrap;

  @media screen and (max-width: 1400px) {
    max-width: 800px;
    margin: 0 auto 0;
    margin-bottom: 180px;
    justify-content: center;
  }
  @media screen and (max-width: 950px) {
    margin-bottom: 100px;
  }

  @media (max-width: 375px) {
    max-width: 343px;
    margin: 0 auto 0;
  }
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
        <PageWrapper>
          <Header />
          <Hero />
          <Page>
            <PageWrapper className="stats__wrapper">
              <Title
                text="The Mental Health Crisis in LGBTQ+ Communities is an Economic Crisis for America"
                marginBottom={80}
              />
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
            </PageWrapper>
            <Insights />
            <ChartSection />
          </Page>
          <OurStory />
          <Page>
          <Title text="What We Do" marginBottom={40}/>
          <Unfold id="whatwedo">
            {data.whatWeDoCard.map((item) => (
              <Unfold.Wrapper key={_.uniqueId("Unfold-Block-")}>
                <Unfold.Header item={item} />
                <Unfold.Content item={item} />
              </Unfold.Wrapper>
            ))}
          </Unfold>
        <WorkSection/>
        <Faq/>
        </Page>
        <ModalWrapper isModalOpen={isModalOpen} closeModal={closeModal}>
            <ModalHeader closeModal={closeModal} isModalConfirmation={isModalConfirmation} />
            {isModalConfirmation ? <ModalSuccess/> : <Form handleSuccess={handleSuccess}/>}
        </ModalWrapper> 
        </PageWrapper> 
        <Footer/>
      </ModalContext.Provider>
    </Theme>
  );
}

export default App;
