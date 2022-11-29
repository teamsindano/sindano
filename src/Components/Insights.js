import styled from "styled-components";
import insights from '../images/insights.png';
import Title from "./Title";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animationVariants";

/**
 * Insights Section
 * Adjustments: @author [Sam](https://github.com/Samm96)
 *
 */

const InsightsSection = styled.section`
    width: 100%;
    display: flex;
    margin: 0 0 200px;

    @media screen and (max-width: 900px){
        margin: 0 0 100px;
    }
`;

const Wrapper = styled.div`
    margin: 0 auto 0;
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
`;

const InsightsImage = styled.img`
    display: block;
    align-self: center;
    width: 482px;
    height: 482px;

    @media screen and (max-width: 500px){
        width: 211px;
        height: 211px;
    }
`
const TextContainer = styled.div`
    max-width: 620px;
    margin-left: 127px;

    @media (max-width: 1024px) {
      max-width: 939px;
      margin-left: 0;
    }

    @media (max-width: 375px) {
      max-width: 343px;
    }
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  margin: 32px 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.families.text};

  @media (max-width: 1024px) {
    max-width: 698px;
  }
`;

function Insights() {
  return (
    <InsightsSection
      as={motion.section}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <Wrapper>
      <InsightsImage src={insights} alt="graphic" />
      <TextContainer>
        <Title
          text="Insights for transparent and equitable precision mental healthcare"
          marginBottom={32}
        />
        <Text>
          Sindano Health is a data analytics and SaaS technology company
          developing human-first AI solutions to address disparities in mental
          health outcomes for LGBTQ+ communities through a racial equity lens.
        </Text>
        <Text>
          We empower mental healthcare systems and insurance plans with
          community-driven, actionable, real-time, and precise data insights
          that enable customized decision-making that identify and close care
          gaps for improved patient and practice outcomes.
        </Text>
      </TextContainer>
      </Wrapper>
    </InsightsSection>
  );
}

export default Insights;
