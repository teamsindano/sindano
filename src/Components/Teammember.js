import styled from "styled-components";

/**
 * The Team Member Component
 * @author [Sam](https://github.com/Samm96)
 *
 * React template to create team members.
 */

// note: remember to replace values with Theme.js props

const Container = styled.div.attrs(() => ({ tabIndex: 0 }))`
  max-width: 351px;
  display: flex;

  &.teammember__text-container {
    margin: 0 0 0 20px;
    max-width: 205px;
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
  font-family: "Open Sauce Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #000000;

  margin: 0;
  padding; 0;

  &.teammember__name {
    font-weight: 700;
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

  return (
    <div className="teammember">
      <Container>
        <Photo src={photo || placeholder.photo} alt="Placeholder Img" />
        <Container className="teammember__text-container">
          <Container className="teammember__name-container">
            <Text className="teammember__name">{name || placeholder.name}</Text>
            <Text>{pronouns ? pronouns : placeholder.pronouns}</Text>
          </Container>
          <Text>{headline || placeholder.headline}</Text>
        </Container>
      </Container>
    </div>
  );
};

export default TeamMember;
