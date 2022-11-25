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
  margin: 160px auto;
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
          <PrimaryButton onClick={openModal}/>
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
      </RightSection>
    </WorkSectionContainer>
  );
}

export default WorkSection;
