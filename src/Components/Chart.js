import styled from "styled-components";

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
  background-color: #bcaec6;
  border-radius: 20px;

  &.chart__heading {
    width: fit-content;
    margin: 0 auto 0;
    padding: 24px 0 0;
  }
`;

const Text = styled.p.attrs(() => ({ tabIndex: 0 }))`
  font-family: "Open Sauce Sans", sans-serif;
  margin: 16px 0 0;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;

  text-align: center;

  &.chart__text-heading {
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;

    margin: 0;
    padding: 0;
  }

  &.chart__fact {
    text-align: left;
  }
`;


const Bar = styled.span`
  background-color: #283592;
  border-radius: 2px;
  height: 12px;
`;

const Chart = () => {

  return (
    <Container>
      <Container className="chart__heading">
        <Text className="chart__text-heading">The importance of information</Text>
        <Text className="chart__text-heading">when deciding on where to receive care</Text>
      </Container>
      <Text>
        Respondents ranked 8-10 on a 10-point scale, %
      </Text>
      <Container className="chart__statistics">
        <ul>
            <li>
                <Text className="chart__fact">Covered by my health insurance</Text>
                <Bar />
                <Text>78</Text>
            </li>
        </ul>
      </Container>
    </Container>
  );
};

export default Chart;
