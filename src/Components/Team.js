import styled from "styled-components";
import { data } from "../utils/data";
import TeamMember from "./Teammember";

/**
 * The Team Component
 * @author [Sam](https://github.com/Samm96)
 *
 * The Sindano Team
 */

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

const Team = () => {
  return (
    <Container>
      {data.team.map((person, index) => (
        <TeamMember
          key={index}
          photo={person.image}
          name={person.name}
          pronouns={person.pronouns}
          headline={person.title}
        />
      ))}
    </Container>
  );
};

export default Team;
