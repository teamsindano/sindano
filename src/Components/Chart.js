import styled from "styled-components";
import { data } from "../utils/data";

/**
 * The Chart Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Location with the group of Unfold components reside
 */

/** background color is placeholder for now */

const widths = {
  78: "369px",
  74: "351px",
  70: "332px",
  69: "327px",
  68: "323px",
  67: "317px",
  66: "313px",
  64: "304px",
  62: "293px",
};

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  max-width: 785px;
  width: 100%;
  background: ${props => `${props.theme.gradients.component}`};
  border-radius: 20px;

  &.chart__heading {
    width: fit-content;
    margin: 0 auto 0;
    padding: 24px 0 0;
  }
`;

const Text = styled.p.attrs(() => ({ tabIndex: 0 }))`
  font-family: ${props => `${props.theme.fonts.text.font_family}`};
  margin: 16px 0 0;
  font-size: ${props => `${props.theme.fonts.text.sizes.text_xs}`};
  line-height: 14px;
  font-weight: ${props => `${props.theme.fonts.text.weights.normal}`};

  text-align: center;

  &.chart__text-heading {
    font-size: ${props => `${props.theme.fonts.text.sizes.text_m}`};
    line-height: 20px;
    font-weight: ${props => `${props.theme.fonts.header.weight}`};

    margin: 0;
    padding: 0;
  }

  &.chart__fact {
    text-align: left;
    margin: 0;
  }

  &.chart__number {
    margin: 0;
  }
`;

const Bar = styled.span`
  background-color: ${props => `${props.theme.colors.default_component_blue}`};
  border-radius: 2px;
  height: 12px;
`;

const List = styled.ul`
  margin: 0 auto 0;
  padding: 0 0 47px;
  width: 701px;
`;

const Item = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const Chart = () => {
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
        <List>
          {data.chartStats.map((d, index) => (
            <Item>
              <Text key={index} className="chart__fact">
                {d.content}
              </Text>
              <Bar className="chart__bar" />
              <Text key={index + ".2"} className="chart__number">
                {d.number}
              </Text>
            </Item>
          ))}
        </List>
      </Container>
    </Container>
  );
};

export default Chart;
