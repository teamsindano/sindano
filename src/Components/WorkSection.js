import styled from 'styled-components';
import Title from './Title';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import work from '../images/how_we_work_photo.png';
import { motion } from 'framer-motion';
import { sectionVariants } from '../utils/animationVariants';
import { useContext } from 'react';
import { ModalContext } from './App';

const WorkSectionContainer = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 160px;
  margin-top: 160px;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const InputBox = styled.input`
  width: 291px;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 12px;
  margin-right: 20px;
  padding: 0 20px;
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
`;

const Image = styled.img`
  display: block;
  width: 600px;
  border-radius: 12px;
`;

const RightSection = styled.div`
  position: relative;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  width: 750px;
  height: 611px;
  background-image: linear-gradient(
      0deg,
      rgba(255, 252, 170, 0.2),
      rgba(255, 252, 170, 0.2)
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

function WorkSection() {
  const { openModal } = useContext(ModalContext);
  
  return (
    <WorkSectionContainer
      as={motion.section}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <LeftSection>
        <div>
          <Title text="See How We Work" marginBottom={32} />
          <PrimaryButton onClick={openModal} label="Request a call"/>
        </div>
        <div>
          <Title text="Get Product Updates" marginBottom={40} />
          <FlexDiv>
            <InputBox placeholder="your e-mail" />
            <SecondaryButton>Subscribe</SecondaryButton>
          </FlexDiv>
        </div>
      </LeftSection>
      <RightSection>
        <Image src={work} />
        <Blur />
      </RightSection>
    </WorkSectionContainer>
  );
}

export default WorkSection;
