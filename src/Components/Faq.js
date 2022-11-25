import styled from "styled-components";
import { data } from "../utils/data";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animationVariants";

const QuestionStyled = styled.section`
	display: flex;
    width: 100%;
    flex-direction: column;
	justify-content: center;
	margin-top: 160px;
    margin-bottom: 230px;
    padding: 0 245px;
    box-sizing: border-box;
    @media screen and (max-width: 1200px) {
        padding: 0;
    }

    @media (max-width: 375px) {
        max-width: 343px;
    }
`;

const TitleStyled = styled.h3`
    font-family: ${(props) => props.theme.fonts.header.font_family[0]};
	font-size: 52px;
	font-weight: 700;
	color: #283592;
	margin-top: 0;
	margin-bottom: 32px;
    width: 100%;
`;

const QuestionSection = styled.div`
    width: 100%;
	display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 32px;
    column-gap: 40px;
    @media screen and (max-width: 700px) {
        width: 700px;
        grid-template-columns: none;
    }

    @media (max-width: 375px) {
        max-width: 343px;
    }
`;

const SubTitle = styled.h3`
    font-family: ${(props) => props.theme.fonts.text.font_family[0]};
	max-width: 455px;
	margin-top: 0;
	margin-bottom: 16px;
    @media screen and (max-width: 1200px) {
        max-width: 600px;
    }
`;

const Text = styled.p`
    font-family: ${(props) => props.theme.fonts.text.font_family[0]};
	max-width: 455px;
	margin-top: 0;
	margin-bottom: 16px;
    @media screen and (max-width: 1200px) {
        max-width: 600px;
    }
`;

function Faq() {
	return (
		<QuestionStyled as={motion.section}
        variants={sectionVariants}
        initial="offscreen"
        whileInView="onscreen"
        id="faq">
					<TitleStyled>{data.questions.title}</TitleStyled>
                    <QuestionSection>
                    {data.questions.cards.map((card) => {
                        return ( 
                            <div key={card.id}>
                            <SubTitle>{card.question}</SubTitle>
                                <Text>
                                    {card.answer}
                                </Text>
                            </div>
                        )
                    })}
			</QuestionSection>
		</QuestionStyled>
	);
}
export default Faq;