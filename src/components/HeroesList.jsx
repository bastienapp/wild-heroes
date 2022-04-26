import React from "react";
import HeroesItem from "./HeroesItem";

function HeroesList(props) {
  const { heroesList } = props;

  return (
    <div>
      <ul>
        {heroesList.map((hero) => (
          <HeroesItem heroInfos={hero} />
        ))}
      </ul>
    </div>
  );
}

export default HeroesList;
