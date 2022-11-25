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

const StyledDiv = styled.div`
  &.left-section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 980px) {
      order: 2;
    }
  }

  &.how-section {
    margin-top: 32px;
    margin-bottom: 60px;
  }

  &.subscribe-div {
    display: flex;
    @media screen and (max-width: 580px) {
      flex-direction: column;
    }
  }

  &.right-section {
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
  }
 `;

const InputBox = styled.input`
  background-color: ${(props) => props.theme.colors.primary_background};
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


function WorkSection() {
  const { openModal } = useContext(ModalContext);
  
  return (
    <WorkSectionContainer
      as={motion.section}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <StyledDiv className="left-section">
        <StyledDiv className="how-section">
          <Title text="See How We Work" marginBottom={32} />
          <CustomButton  onClick={openModal} label="Request a call"/>
        </StyledDiv>
        

        <div>
          <Title text="Get Product Updates" marginBottom={40} />
          <StyledDiv className="subscribe-section">
            <InputBox placeholder="your e-mail" />
            <SecondaryButton>Subscribe</SecondaryButton>
          </StyledDiv>
        </div>
      </StyledDiv>
      <StyledDiv className="right-section"> 
        <Image src={work} />
      </StyledDiv>
    </WorkSectionContainer>
  );
}

export default WorkSection;
