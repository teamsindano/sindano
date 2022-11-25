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
  @media screen and (max-width: 1450px) {
    justify-content: center;
  }
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

const CustomButton = styled(PrimaryButton)`
   @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 980px) {
    order: 2;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

const InputBox = styled.input`
  width: 291px;
  display: block;
  height: 50px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 12px;
  margin-right: 20px;
  padding: 0 20px;
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  @media screen and (max-width: 580px) {
    margin-bottom: 12px;
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

const RightSection = styled.div`
  max-width: 620px;
  position: relative;
  @media screen and (max-width: 1450px) {
    max-width: 402px;
    margin-left: 62px;
  }
  @media screen and (max-width: 980px) {
    order: 1;
    margin-left: 0;
  }
`;

const LeftSectionDiv = styled.div`
   @media screen and (max-width: 980px) {
    margin-top: 32px;
    margin-bottom: 60px;
  }
`

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
        <LeftSectionDiv>
          <Title text="See How We Work" marginBottom={32} />
          <CustomButton  onClick={openModal} label="Request a call"/>
        </LeftSectionDiv>
        

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
