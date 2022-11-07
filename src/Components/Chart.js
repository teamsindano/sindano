import styled from "styled-components";
import { Chart as ChartJS, BarElement, BarController, CategoryScale, LinearScale, Legend, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { barData, barOptions } from "../utils/chartConfig";
import ChartDataLabels from 'chartjs-plugin-datalabels';

/**
 * The Chart Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Location with the group of Unfold components reside
 * look at this for how to use Chart.js <https://www.chartjs.org/docs/latest/getting-started/usage.html>
 */

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  width: 785px;
  background: ${(props) => `${props.theme.gradients.component}`};
  border-radius: 20px;

  &.chart__heading {
    width: fit-content;
    margin: 0 auto 0;
    padding: 24px 0 0;
  }

  &.chart__statistics {
    margin: 15px auto 0;
    padding: 0 0 5px;
  }
`;

const Text = styled.p.attrs(() => ({ tabIndex: 0 }))`
  font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
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

  &.chart__fact {
    text-align: right;
    width: 317px;
    margin: 0;
    grid-column: 1;
  }

  &.chart__number {
    margin: 0;
    grid-column: 3;
  }
`;

const InfoLink = styled.a`
  color: ${(props) => `${props.theme.colors.default_button_pink}`};
  border: ${(props) => `2px solid ${props.theme.colors_default_button_pink}`};
`;

ChartJS.register(BarElement, BarController, CategoryScale, LinearScale, Legend, Title, Tooltip);

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
        <Bar type='horizontalBar' data={barData} plugins={[ChartDataLabels]} options={barOptions} width="100%" height="317px"></Bar>
      </Container>
      <InfoLink>i</InfoLink>
    </Container>
  );
};

export default StatsChart;
