import React from "react";
import HeroesItem from "./HeroesItem.jsx"
// TODO pour chaque hero, afficher son nom
function HeroesList(props) {
  const {heroes} = props;
  return (
    <div>
      {
        heroes.map((hero) =>
          <HeroesItem key={hero.id} name={hero.name} image={hero.images.xs} alignment={hero.biography.alignment} /> )
      }
    </div>
 )
}

export default HeroesList;
