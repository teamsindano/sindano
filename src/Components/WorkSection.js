import styled from 'styled-components';
import Title from './Title';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import work from '../images/how_we_work_photo.png';
import { motion } from 'framer-motion';
import { sectionVariants } from '../utils/animationVariants';
import { useContext } from 'react';
import { ModalContext } from './App';

/**
 * Work Section
 * Adjustments & CSS Refactoring: @author [Sam](https://github.com/Samm96)
 *
 */

const WorkSectionContainer = styled.section`
  max-width: 1280px;
  width: 100%;
  margin: 160px auto 0;

  @media (max-width: 375px) {
    margin: 100px auto 0;
  }
`;

const CustomButton = styled(PrimaryButton)`
  &.custom-button {
    @media screen and (max-width: 580px) {
      width: 100%;
    }
  }
`;

const StyledDiv = styled.div`
  &.work-wrapper {
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
      flex-direction: column-reverse;
    }
  }

  &.left-section {
    max-width: 480px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 1024px) {
      max-width: 450px;
      width: 100%;
    }
  }

  &.right-section {
    width: fit-content;
    padding: 0 0 0 20px;

    @media (max-width: 580px) {
      padding: 0;
      margin: 0 auto 0;
    }
  }

  &.how-section {
    max-width: 480px;
    width: 100%;
    margin: 31px 0 60px;

    @media (max-width: 1024px) {
      margin: 31px 0 120px;
    }

    @media (max-width: 580px) {
      margin: 31px 0 60px;
    }
  }

  &.subscribe-section {
    max-width: 480px;
    width: 100%;
    display: flex;
    @media screen and (max-width: 580px) {
      flex-direction: column;
    }
  }
`;

const StyledTitle = styled(Title)`
  &.work-title {
    @media (max-width: 375px) {
      font-size: 40px;
    }
  }
`;

const InputBox = styled.input`
  background-color: ${(props) => props.theme.colors.primary_background};
  max-width: 291px;
  width: 100%;
  display: flex;
  height: 50px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 12px;
  margin-right: 20px;
  padding: 0 20px;
  font-family: ${(props) => props.theme.fonts.families.text};

  @media screen and (max-width: 580px) {
    margin-bottom: 12px;
    max-width: 100%;
    width: 100%;
  }
`;

const Image = styled.img`
  max-width: 814px;
  width: 100%;
  max-height: 543px;
  border-radius: 12px;

  @media (max-width: 1024px) {
    object-fit: cover;
    max-width: 402px;
    width: 100%;
    height: 451px;
  }

  @media (max-width: 580px) {
    width: 100%;
    height: 383px;
  }
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
      <StyledDiv className="work-wrapper">
        <StyledDiv className="left-section">
          <StyledDiv className="how-section">
            <StyledTitle
              className="work-title"
              text="See How We Work"
              marginBottom={32}
            />
            <CustomButton
              onClick={openModal}
              className="custom-button"
              label="Request a call"
            />
          </StyledDiv>

          <div>
            <StyledTitle
              className="work-title"
              text="Get Product Updates"
              marginBottom={40}
            />
            <StyledDiv className="subscribe-section">
              <InputBox placeholder="your e-mail" />
              <SecondaryButton>Subscribe</SecondaryButton>
            </StyledDiv>
          </div>
        </StyledDiv>
        <StyledDiv className="right-section">
          <Image src={work} />
        </StyledDiv>
      </StyledDiv>
    </WorkSectionContainer>
  );
}

export default WorkSection;
