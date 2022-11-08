import styled from "styled-components";
import { data } from "../utils/data";

/**
 * The Team Member Component
 * @author [Sam](https://github.com/Samm96)
 *
 * React template to create team members.
 */

// note: remember to replace values with Theme.js props

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  width: 399px;
  display: flex;

  &.teammember__text-container {
    margin: 0 0 0 20px;
    max-width: 253px;
    flex-direction: column;
    justify-content: center;
  }

  &.teammember__name-container {
    width: fit-content;
  }
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 126px;
  height: 126px;
  object-fit: cover;
  background-position: center;
`;

const Text = styled.p.attrs(() => ({ tabIndex: 0 }))`
  font-family: ${(props) => `${props.theme.fonts.text.font_family}`};
  font-size: ${(props) => `${props.theme.fonts.text.sizes.text_s}`};
  font-weight: ${(props) => `${props.theme.fonts.text.weights.normal}`};
  line-height: 20px;
  color: ${(props) => `${props.theme.colors.default_text_color}`};

  margin: 0;
  padding; 0;

  &.teammember__name {
    font-weight: ${(props) => `${props.theme.fonts.text.weights.bold}`};
    margin: 0 3px 0 0;
  }
`;

const TeamMember = ({ photo, name, pronouns, headline }) => {
  const placeholder = {
    photo:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
    name: "Woofers",
    pronouns: "(dog/retriever)",
    headline:
      "Good Boy with the bestest behavior. He deserves a treat. Woof woof woof",
  };

  const lineBreak = (title) => {
    const headlineSplit = title.includes("and")
      ? title.split("and")
      : title.split("-");

    return (
      <>
        <Text>
          {title.includes("and")
            ? headlineSplit[0]
            : `${headlineSplit[0]} -`}
        </Text>
        <Text>
          {title.includes("and")
            ? `and ${headlineSplit[1]}`
            : headlineSplit[1]}
        </Text>
      </>
    );
  };

  return (
    <div className="teammember">
      <Container>
        <Photo src={photo || placeholder.photo} alt="Placeholder Img" />
        <Container className="teammember__text-container">
          <Container className="teammember__name-container">
            <Text className="teammember__name">
              {name || placeholder.name}
            </Text>
            <Text>
              {pronouns || placeholder.pronouns}
            </Text>
          </Container>
          <Text>{placeholder.headline}</Text>
          {/* {headline.includes("and") ||
          headline.includes("-") ? (
            lineBreak(headline)
          ) : (
            <Text>{headline}</Text>
          )} */}
        </Container>
      </Container>
    </div>
  );
};

export default TeamMember;