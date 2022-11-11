import styled from "styled-components";
import { Chart as ChartJS, BarElement, BarController, CategoryScale, LinearScale, Legend, Title, Tooltip } from 'chart.js';
import { Bar } from "react-chartjs-2";
import { barData, barOptions } from "../utils/chartConfig";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Source from './Source';

/**
 * The Chart Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Chart that resides in Main
 */

 ChartJS.register(BarElement, BarController, CategoryScale, LinearScale, Legend, Title, Tooltip);

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
  width: 785px;
  background: ${(props) => `${props.theme.gradients.component}`};
  border-radius: 20px;
  position: relative;
  &.chart__heading {
    width: fit-content;
    margin: 0 auto 0;
    padding: 24px 0 0;
  }
  &.chart__statistics {
    margin: 20px auto 0;
    padding: 0 0 47px;
  }
`;

const Text = styled.p.attrs(() => ({ tabIndex: 0 }))`
  margin: 16px 0 0;
  font-size: ${(props) => `${props.theme.fonts.text.sizes.text_xs}`};
  line-height: 14px;
  font-weight: ${(props) => `${props.theme.fonts.text.weights.normal}`};
  text-align: center;
  &.chart__text-heading {
    font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
    line-height: 20px;
    font-weight: ${(props) => `${props.theme.fonts.header.weight}`};
    margin: 0;
    padding: 0;
  }
`;


const BarChart = () => {
  return (
    <Container>
      <Container className="chart__heading">
        <Text className="chart__text-heading">
          The importance of information
        </Text>
        <Text className="chart__text-heading">
          when deciding on where to receive care
        </Text>
      </Container>
      <Text>Respondents ranked 8-10 on a 10-point scale, %</Text>
      <Container className="chart__statistics">
        <Bar
          type="horizontalBar"
          data={barData}
          plugins={[ChartDataLabels]}
          options={barOptions}
          width="100%"
          height="317px"
        ></Bar>
      </Container>
      <Source info="Source: Jade Y. (2020), Data Report on mental health state of LGBTQ+ people in the U.S., source" fontColor={"white"}/>
    </Container>
  );
};

export default BarChart;