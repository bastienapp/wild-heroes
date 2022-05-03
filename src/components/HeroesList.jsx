import React, { useState } from "react";
import HeroesItem from "./HeroesItem";

function HeroesList({ heroesList }) {
  const [side, setSide] = useState("All");
  return (
    <div>
      <button onClick={() => setSide("All")}>All</button>
      <button onClick={() => setSide("good")}>Good</button>
      <button onClick={() => setSide("bad")}>Evil</button>
      {heroesList
        .filter((e) =>
          side === "good"
            ? e.biography.alignment === "good"
            : side === "bad"
            ? e.biography.alignment === "bad"
            : e
        )
        .map((element, index) => (
          <HeroesItem
            name={element.name}
            alignment={element.biography.alignment}
            image={element.images.md}
          />
        ))}
    </div>
  );
}

export default HeroesList;

// {side === "All" ? (
//   heroesList.map((element) => <HeroesItem
//     name={element.name}
//     alignment={element.biography.alignment}
//     image={element.images.md}
//   />)
// ) : (
//   heroesList
//     .filter((e) => e.biography.alignment === side)
//     .map((element, index) => (
//       <HeroesItem
//         name={element.name}
//         alignment={element.biography.alignment}
//         image={element.images.md}
//       />
//     ))
// )}
