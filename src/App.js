import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character";

const CharacterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 90vw;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setData(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoaded(false);
      });
  }, []);
  console.log(data);
  return (
    <>
      {!isLoaded && <p>Loading...</p>}
      {isLoaded && (
        <div className="App">
          {console.log(data)}
          <h1 className="Header">Characters</h1>

          <CharacterList>
            {data.map((char) => {
              return <Character key={char.name} data={char}></Character>;
            })}
          </CharacterList>
        </div>
      )}
    </>
  );
};

export default App;
