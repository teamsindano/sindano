import styled from "styled-components";
import graphic from "../images/insights_chart_graphic.svg";

/**
 * The Insights Section Component
 * @author [Sam](https://github.com/Samm96)
 *
 * For the graphic as well as the stats chart
 */

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  width: 100%;
  background-color: ${(props) => `${props.theme.colors.primary_background}`};
  color: ${(props) => `${props.theme.colors.default_text_color}`};

  &.insights__top {
    margin: 0 auto 0;
    display: flex;
    flex-direction: columns;
  }

  &.insights__bottom {
    padding: 200px 0 0;
  }

  &.insights__info {
    position: relative;
  }

  &.insights__oval {
    background: ${(props) => `${props.theme.colors.pink_opacity}`};
    width: 324px;
    height: 233px;
    border-radius: 50%;
    filter: blur(50px);
    -webkit-filter: blur(50px);
    position: absolute;
    right: 0;
  }

  &.insights__big-oval {
    background: ${(props) => `${props.theme.colors.pink_opacity}`};
    width: 798px;
    height: 480px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
    border-radius: 68px;
    filter: blur(77px);
    -webkit-filter: blur(77px);
    position: absolute;
    left: 0;
  }
`;

const Graphic = styled.img``;

const MoreInfo = styled.p`
  font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
  font-weight: ${(props) => `${props.theme.fonts.text.weights.bold}`};
  font-size: ${(props) => `${props.theme.fonts.text.sizes.text_l_default}`};
  margin: 0;
  line-height: 30px;
  width: 400px;
  text-align: center;
`;

const InsightsSection = () => {
  return (
    <Container>
      <Container className="insights__top">
        <Graphic src={graphic} alt="Insights Graphic" />
        {/* replace below with content component */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
      <Container className="insights__bottom">
        {/* insert stat-chart component here */}
        <Container className="insights__info">
          <Container className="insights__oval"></Container>
          <Container className="insights__big-oval"></Container>
          <MoreInfo>
            Want the LGBTQ+ Mental Healthcare Insights That Matter?
          </MoreInfo>
          {/* insert primary button here */}
        </Container>
      </Container>
    </Container>
  );
};

export default InsightsSection;
