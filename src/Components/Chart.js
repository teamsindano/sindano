import styled from "styled-components";
import { Chart as ChartJS, BarElement, BarController, CategoryScale, LinearScale, Legend, Title, Tooltip } from 'chart.js';
import { Bar } from "react-chartjs-2";
import { barData, barOptions } from "../utils/chartConfig";
import ChartDataLabels from "chartjs-plugin-datalabels";

/**
 * The Chart Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Location with the group of Unfold components reside
 * look at this for how to use Chart.js <https://www.chartjs.org/docs/latest/getting-started/usage.html>
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

const InfoLink = styled.button`
  color: ${(props) => `${props.theme.colors.default_button_pink}`};
  font-weight: ${(props) => `${props.theme.fonts.text.weights.bold}`};
  font-size: 10px;
  width: 17px;
  height: 16px;
  padding: 0 0 2px 0;
  border: 3px solid;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  right: 25px;

  &:hover {
    cursor: pointer;
  }
`;

const StatsChart = () => {
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
      <InfoLink>i</InfoLink>
    </Container>
  );
};

export default StatsChart;
