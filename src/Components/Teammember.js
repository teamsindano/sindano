const TeamMember = ({ name, pronouns, title }) => {
  const placeholder = {
    names: "Woofers",
    pronoun: "(dog/retriever)",
    occupation: "Good Boy",
  };

  return (
    <div className="team-member">
      <div className="team-member__container">
        <img
          className="team-member__photo"
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80"
          alt="Placeholder Img"
        />
        <p className="team-member__name">{name || placeholder.names}</p>
        <p className="team-member__pronouns">
          {pronouns ? pronouns || placeholder.pronoun : ""}
        </p>
        <p className="team-member__headline">
          {title || placeholder.occupation}
        </p>
      </div>
    </div>
  );
};
