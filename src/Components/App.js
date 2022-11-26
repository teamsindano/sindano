import React, { useState, createContext } from "react";
import _ from "lodash";
import Theme from "./Theme";
import { data } from "../utils/data";
import styled from "styled-components";
import Unfold from "./Unfold/Unfold";
import Stat from "./Stat";
import Title from "./Title";
import Hero from "./Hero";
import Footer from "./Footer";
import Faq from "./Faq";
import ChartSection from "./ChartSection";
import Insights from "./Insights";
import WorkSection from "./WorkSection";
import ModalWrapper from "./Modal/ModalWrapper";
import ModalHeader from "./Modal/ModalHeader";
import ModalContent from "./Modal/ModalContent";
import Header from "./Header";
import OurStory from "./OurStory";

const Page = styled.div`
	width: 80vw;
	margin: 0 auto;
	padding: 0 80px;
	@media screen and (max-width: 1350px) {
		width: calc(100vw - 80px);
		padding: 0 40px;
	}
	@media screen and (max-width: 100px) {
		width: calc(100vw - 32px);
		padding: 0 16px;
	}
`;

const StatsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: start;
	gap: 40px;
	margin-bottom: 180px;
	flex-wrap: wrap;
	@media screen and (max-width: 1400px) {
		width: 800px;
		margin: 0 auto;
		margin-bottom: 180px;
		justify-content: center;
	}
	@media screen and (max-width: 950px) {
		width: 600px;
		margin-bottom: 100px;
	}
`;

export const ModalContext = createContext();

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalConfirmation, setIsModalConfirmation] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setIsModalConfirmation(false);
	};

	const handleSuccess = () => {
		setIsModalConfirmation(true);
	};

	return (
		<Theme>
			<ModalContext.Provider value={{ openModal }}>
				<Header />
				<Hero />
				<Page>
					<Title
						text="The Mental Health Crisis in LGBTQ+ Communities is an Economic Crisis for America"
						marginBottom={80}
					/>
					<StatsContainer>
						{data.statsCards.map((card) => {
							return (
								<Stat
									id={card.id}
									key={card.id}
									source={card.source}
									cardHeader={card.cardHeader}
									cardText={card.cardText}
								/>
							);
						})}
					</StatsContainer>
					<Insights />
					<ChartSection />
				</Page>
				<OurStory />
				<Page>
					<Title text="What We Do" marginBottom={40} />
					<Unfold>
						{data.whatWeDoCard.map((item) => (
							<Unfold.Wrapper key={_.uniqueId("Unfold-Block-")}>
								<Unfold.Header item={item} />
								<Unfold.Content item={item} />
							</Unfold.Wrapper>
						))}
					</Unfold>
					<WorkSection />
					<Faq />
				</Page>
				<Footer />
				<ModalWrapper isModalOpen={isModalOpen} closeModal={closeModal}>
					<ModalHeader
						closeModal={closeModal}
						isModalConfirmation={isModalConfirmation}
					/>
					<ModalContent
						isModalConfirmation={isModalConfirmation}
						handleSuccess={handleSuccess}
					/>
				</ModalWrapper>
			</ModalContext.Provider>
		</Theme>
	);
}

export default App;
