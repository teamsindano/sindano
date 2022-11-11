import React, { useEffect } from 'react';
import { useState } from 'react';
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto, 1fr);
    grid-gap: 65px 0;
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
