import styled from "styled-components";
import { data } from "../utils/data";

/**
 * The Chart Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Location with the group of Unfold components reside
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

const Bar = styled.span`
  margin: 0 8px 0;
  background-color: ${(props) =>
    `${props.theme.colors.default_component_blue}`};
  border-radius: 2px;
  height: 12px;
  width: ${(props) => `${props.size.currentWidth}`};
  grid-column: 2;
`;

const List = styled.ul`
  width: fit-content;
  margin: 40px auto 0;
  padding: 0 0 46px;
  display: grid;
  grid-template-columns: fit-content;
  grid-gap: 14px;
`;

const Item = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const size = {
  currentWidth: "",
};

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
            <Item key={index}>
              <Text key={index + ".1"} className="chart__fact">
                {d.content}
              </Text>
              <Bar
                key={index + ".2"}
                className="chart__bar"
                size={{ currentWidth: widths[d.number] }}
              />
              <Text key={index + ".3"} className="chart__number">
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
