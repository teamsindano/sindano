import React from 'react';
import Theme from "./Theme";
import { data } from '../utils/data';
import styled from "styled-components";
import Unfold from './Unfold/Unfold';
import Stat from './Stat';
import Title from './Title';
import Hero from './Hero';
import Footer from './Footer';
import Faq from './Faq';
import ChartSection from './ChartSection';

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

function App() {

  return (
   
    <Theme>
        <Page>
          <Hero/>
          <Title text="The Mental Health Crisis in LGBTQ+ Communities is an Economic Crisis for America"/>
          <StatsContainer>
            {data.statsCards.map((card) => {

            return <Stat id={card.id} key={card.id} source={card.source} cardHeader={card.cardHeader} cardText={card.cardText}/>
            })
            }
          </StatsContainer>
          <ChartSection/>
          <Title text="What We Do"/>
          {data.whatWeDoCard.map((item) => (
          <Unfold key={item.id}>
                <Unfold.Header item={item} />
                <Unfold.Content item={item} />
          </Unfold>
        ))}
        <Faq/>
        <Footer/>
        </Page>
      </Theme>
   
  );
}

export default App;
