import styled from "styled-components";
import BarChart from "./BarChart";
import PrimaryButton from "./PrimaryButton";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animationVariants";
import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "./App";
import { barData, barOptions, smallBarData } from "../utils/chartConfig";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "react-chartjs-2";

const ChartSectionContainer = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 160px;

  @media (max-width: 1024px) {
    max-width: 1024px;
    width: 100%;
    flex-direction: column;
    margin-bottom: 200px;
  }
`;

const RequestDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: center;
  margin-left: 40px;
  position: relative;

  @media (max-width: 1024px) {
    margin: 0 auto 0;
  }
`;

const RequestTitle = styled.h2`
  max-width: 455px;
  width: 100%;
  font-family: ${(props) => props.theme.fonts.families.text};
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;

  @media (max-width: 375px) {
    max-width: 355px;
    font-size: 18px;
    margin: 0 6px 20px;
  }
`;

const RightContainer = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    margin: 0 auto 100px;
  }
`;

function ChartSection() {
  const { openModal } = useContext(ModalContext);

  const data = {
    type: "horizontalBar",
    plugins: [ChartDataLabels],
    data: { ...barData },
    options: { ...barOptions },
  };

  const newLabels =  barData.labels.map((d) => {
      if (d.length > 31 && document.documentElement.clientWidth <= 580) {
      const splitPoint = d.split(" ");
      return [
        [splitPoint.slice(0, splitPoint.length / 2).join(" ")],
        [splitPoint.slice((splitPoint.length / 2)).join(" ")],
      ]};
      return d;
  });

  useEffect(() => {
    if (document.documentElement.clientWidth <= 375) {
      data.options.scales.yAxis.ticks.font.size = 6;
      data.options.scales.yAxis.ticks.padding = 13;
      data.data.labels = newLabels;
    } 
  }, [data, data.options.scales.yAxis.ticks, newLabels]);

  return (
    <ChartSectionContainer
      as={motion.section}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <RightContainer>
        <BarChart
          heading="The importance of information when deciding on where to receive care"
          text="Respondents ranked 8-10 on a 10-point scale, %"
          data={data}
        />
      </RightContainer>
      <RequestDiv>
        <RequestTitle>
          Want the LGBTQ+ Mental Healthcare Insights That Matter?
        </RequestTitle>
        <PrimaryButton onClick={openModal} label="Request a call" />
      </RequestDiv>
    </ChartSectionContainer>
  );
}

export default ChartSection;
