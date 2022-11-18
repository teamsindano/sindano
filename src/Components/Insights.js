import styled from "styled-components";
import insights from '../Images/insights.png';
import Title from "./Title";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animationVariants";

const InsightsSection = styled.section`
    width: 100%;
    display: flex;
    margin-bottom: 200px;
    margin: 0 auto;
    @media screen and (max-width: 1450px){
        flex-direction: column;
    }
`;

const InsightsImage = styled.img`
    display: block;
    align-self: center;
    width: 482px;
    height: 482px;
    @media screen and (max-width: 1450px){
        width: 350px;
        height: 350px;
    }
    @media screen and (max-width: 500px){
        width: 211px;
        height: 211px;
    }
`
const TextContainer = styled.div`
    margin-left: 111px;
    @media screen and (max-width: 1450px){
        margin-left: 0;
    }
`

const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  margin: 32px 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
`;

function Insights() {
  return (
    <InsightsSection
      as={motion.section}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <InsightsImage src={graphic} alt="graphic" />
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
    </InsightsSection>
  );
}

<<<<<<< HEAD
    return (
        <InsightsSection 
         as={motion.section}
            variants={sectionVariants}
            initial="offscreen"
            whileInView="onscreen"
        >
            <InsightsImage src={insights} alt="heart"/>
            <TextContainer>
                <Title text="Insights for transparent and equitable precision mental healthcare" marginBottom={32}/>
                <Text>Sindano Health is a data analytics and SaaS technology company developing human-first AI solutions to address disparities in mental health outcomes for LGBTQ+ communities through a racial equity lens.</Text>
                <Text>We empower mental healthcare systems and insurance plans with community-driven, actionable, real-time, and precise data insights that enable customized decision-making that identify and close care gaps for improved patient and practice outcomes.</Text>
            </TextContainer>
        </InsightsSection>
    );
};

export default Insights;
=======
export default Insights;
>>>>>>> main
