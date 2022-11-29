import styled from 'styled-components';
import BarChart from './BarChart';
import PrimaryButton from './PrimaryButton';
import { motion } from 'framer-motion';
import { sectionVariants } from '../utils/animationVariants';
import { useContext } from 'react';
import { ModalContext } from './App'

const ChartSectionContainer = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 160px;

  @media (max-width: 1024px) {
    max-width: 1024px;
    width: 100%;
    flex-direction: column;
    margin-bottom: 200px;
  }
`;

const RequestDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  margin-left: 40px;
  position: relative;

  @media (max-width: 1024px) {
    margin: 0 auto 0;
  }
`;

const RequestTitle = styled.h2`
  max-width: 455px;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;

  @media (max-width: 375px) {
    max-width: 355px;
    font-size: 18px;
    margin: 0 6px 20px;
  }
`;

const RightContainer = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    margin: 0 auto 100px;
  }
`;

function ChartSection() {

  const { openModal } = useContext(ModalContext);

  return (
    <ChartSectionContainer
      as={motion.section}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <RightContainer>
        <BarChart />
      </RightContainer>
      <RequestDiv>
        <RequestTitle>
          Want the LGBTQ+ Mental Healthcare Insights That Matter?
        </RequestTitle>
        <PrimaryButton onClick={openModal} label="Request a call"/> 
  

      </RequestDiv>
    </ChartSectionContainer>
  );
}

export default ChartSection;
