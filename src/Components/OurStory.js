import styled from "styled-components";
import Team from "./Team";
import { motion } from "framer-motion";
import { sectionVariants } from "../utils/animationVariants";
import Content from "../Components/Content";
import { data } from "../utils/data";

/**
 * The Our Story Component
 * @author [Sam](https://github.com/Samm96)
 *
 * Section about the Sindano Team
 */

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  background-color: ${(props) => `${props.theme.colors.primary_background}`};
  max-width: 100%;
  height: fit-content;
  margin: 0 auto;
  padding: 80px 80px 210px 80px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 80px 40px 200px 40px;
  }

  @media (max-width: 375px) {
    padding: 100px 16px 100px 16px;
  }

  &.story {
    background-color: transparent;
    max-width: 1281px;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      max-width: 1024px;
    }
  }

  &.story__content {
    margin: 0 40px 0 0;
    padding: 0;
  }

  &.story__founder {
    background-color: transparent;
    max-width: 620px;
    margin: 88px 0 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gird-template-rows: 1fr 1fr;
    grid-gap: 16px;

    @media (max-width: 1024px) {
      max-width: 1024px;
      margin: 80px 0 0 0;
      justify-self: flex-end;
      grid-template-columns: 1fr;
      grid-gap: 16px 0;
    }

    
  }

  &.team__container {
    background-color: transparent;
    max-width: 1281px;
    width: fit-content;
    margin: 120px auto 0;
    padding: 0;

    @media (max-width: 1024px) {
      margin: 82px auto 0;
    }

    @media (max-width: 375px) {
      margin: 40px auto 0;
    }
  }
`;

const Text = styled.p.attrs(() => ({ tabIndex: 0 }))`
  font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
  font-weight: ${(props) => `${props.theme.fonts.text.weights.normal}`};
  font-size: ${(props) => `${props.theme.fonts.text.sizes.text_m}`};
  line-height: 30px;
  margin: 0;
  padding: 0;

  &.story__founder-quote {
    font-style: ${(props) => `${props.theme.fonts.text.styles}`};
    width: 608px;
    line-height: 22px;

    @media (max-width: 1024px) {
      max-width: 561px;
      width: 100%;
      margin: 0 0 0 12px;
    }

    @media (max-width: 375px) {
      max-width: 343px;
    }
  }

  &.story__founder-name {
    text-align: right;
    grid-column: 2;

    @media (max-width: 375px) {
      font-size: ${(props) => `${props.theme.fonts.text.sizes.text_s}`};
    }
  }
`;

const Line = styled.span`
  border-left: 2px solid
    ${(props) => `${props.theme.colors.default_text_color}`};
  height: 100%;
  justify-self: end;
`;

const OurStory = () => {
  return (
    <Container
      id="ourstory"
      as={motion.div}
      variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
    >
      <Container className="story">
        <Container className="story__content">
          <Content
            header={data.content.ourStory.header}
            details={data.content.ourStory.paragraphs}
          />
        </Container>
        <Container className="story__founder">
          <Line></Line>
          <Text className="story__founder-quote">
            "As a queer Black woman, married to a queer Black nonbinary person,
            with a queer Black autistic daughter, I'm creating the solution my
            family needs. As it turns out, it's also the solution our
            communities need. Sindano Health exists so no other queer person
            from a racially marginalized background ever has to check out of the
            continuum of care due to lack of access to appropriate mental
            healthcare. Sindano Health exists because we all deserve to thrive."
          </Text>
          <Text className="story__founder-name">— Tara Marshall-Hill</Text>
        </Container>
      </Container>
      <Container className="team__container">
        <Team />
      </Container>
    </Container>
  );
};

export default OurStory;
