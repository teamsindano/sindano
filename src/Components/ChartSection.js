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
`;

const RequestDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  margin-left: 40px;
  position: relative;
`;

const RequestTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
`;

const Ellipse = styled.div`
  position: absolute;
  width: 324px;
  height: 233px;
  right: 20px;
  bottom: -50px;
  background: rgba(236, 30, 123, 0.1);
  filter: blur(50px);
  z-index: -1;
`;

const RightBlur = styled.div`
  position: absolute;
  top: 0;
  left: -30px;
  width: 798px;
  height: 480px;
  background-image: linear-gradient(
      0deg,
      rgba(255, 252, 170, 0.1),
      rgba(255, 252, 170, 0.1)
    ),
    radial-gradient(
        110.58% 110.58% at 40.19% 148.08%,
        rgba(40, 53, 146, 0.5) 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        141.03% 3248.2% at 71.91% -110.26%,
        #ff98c6 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(93.91% 3215.11% at 1.53% 100%, #dbcce5 0%, #ffffff 100%)
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  filter: blur(77px);
  border-radius: 60px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  z-index: -1;
`;

const RightContainer = styled.div`
  position: relative;
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
        <RightBlur />
      </RightContainer>
      <RequestDiv>
        <RequestTitle>
          Want the LGBTQ+ Mental Healthcare  Insights That Matter?
        </RequestTitle>
        <PrimaryButton onClick={openModal} label="Request a call"/> 
        <Ellipse />
      </RequestDiv>
    </ChartSectionContainer>
  );
}

export default ChartSection;
