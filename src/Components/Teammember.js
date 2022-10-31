/**
 * The Teammember Component
 * @author [Sam](https://github.com/Samm96)
 *
 * React template to create team members.
 */

const TeamMember = ({ photo, name, pronouns, title }) => {
  // note: remember to replace values with variables from theme file

  const Container = styled.div`
    max-width: 361px;
  `;

  const Photo = styled.img`
    border-radius: 50%;
    width: 126px;
    height: 126px;
  `;

  const Text = styled.p`
    font-family: "Open Sauce Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #0000;
  `;

  const BoldText = styled(Text)`
    font-weight: 700;
  `;

  const placeholder = {
    profile:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
    names: "Woofers",
    pronoun: "(dog/retriever)",
    occupation: "Good Boy",
  };

  return (
    <div className="team-member">
      <Container className="team-member__container">
        <Photo
          className="team-member__photo"
          src={photo || placeholder.profile}
          alt="Placeholder Img"
        />
        <BoldText className="team-member__name">
          {name || placeholder.names}
        </BoldText>
        <Text className="team-member__pronouns">
          {pronouns ? pronouns || placeholder.pronoun : ""}
        </Text>
        <Text className="team-member__headline">
          {title || placeholder.occupation}
        </Text>
      </Container>
    </div>
  );
};
