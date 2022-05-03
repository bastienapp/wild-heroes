import React, { useState } from "react";
import HeroesItem from "./HeroesItem";

function HeroesList(props) {
  const { heroesList } = props;
  const [alignmentFilter, setAlignmentFilter] = useState("all");
  
  const handle = (alignment) => {
    setAlignmentFilter(alignment);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={() => handle("all")}>
          All
        </button>
        <button type="button" onClick={() => handle("good")}>
          Good
        </button>
        <button type="button" onClick={() => handle("bad")}>
          Evil
        </button>
      </div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {heroesList
          .filter((hero) =>
            alignmentFilter === "all"
              ? true
              : hero.biography.alignment === alignmentFilter
          )
          .map((hero) => (
            <HeroesItem heroInfos={hero} key={hero.id}/>
          ))}
      </ul>
    </div>
  );
}

export default HeroesList;
