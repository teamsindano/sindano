import styled from "styled-components";

const QuestionStyled = styled.section`
	display: flex;
	justify-content: center;
	margin-top: 160px;
`;
const TitleStyled = styled.h3`
	font-size: 52px;
	font-weight: 700;
	color: #283592;
	margin-top: 0;
	margin-bottom: 32px;
`;
const QuestionSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: normal;
`;
const QuestionColumnleft = styled.div`
	display: flex;
	flex-direction: column;
`;
const QuestionColumnRigth = styled.div`
	display: flex;
	margin-top: 90px;
	padding-left: 40px;
	flex-direction: column;
`;
const SubTitle = styled.h3`
	max-width: 455px;
	margin-top: 0;
	margin-bottom: 16px;
`;
const Text = styled.p`
	max-width: 455px;
	margin-top: 0;
	margin-bottom: 16px;
`;
function Questions() {
	return (
		<QuestionStyled>
			<QuestionSection>
				<QuestionColumnleft>
					<TitleStyled>FAQ</TitleStyled>
					<SubTitle>Q: What is Lorem Ipsum?</SubTitle>
					<Text>
						{" "}
						A: Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</Text>
					<SubTitle>Q: What is Lorem Ipsum?</SubTitle>
					<Text>
						{" "}
						A: Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</Text>
				</QuestionColumnleft>
				<QuestionColumnRigth>
					<SubTitle>Q: What is Lorem Ipsum?</SubTitle>
					<Text>
						{" "}
						A: Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</Text>
					<SubTitle>Q: What is Lorem Ipsum?</SubTitle>
					<Text>
						{" "}
						A: Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</Text>
				</QuestionColumnRigth>
			</QuestionSection>
		</QuestionStyled>
	);
}
export default Questions;
