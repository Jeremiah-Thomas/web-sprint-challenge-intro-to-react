// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharCard = styled.div`
  border: solid black 2px;
`;

const Character = (props) => {
  return (
    <CharCard>
      <h1>{props.data.name}</h1>
      <p>Gender: {props.data.gender}</p>
      <p>Eye Color: {props.data.eye_color}</p>
      <p>Height: {props.data.height}cm</p>
      <p>Mass: {props.data.mass}kg</p>
    </CharCard>
  );
};

export default Character;
