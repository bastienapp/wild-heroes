import React from "react";
import HeroesItem from "./HeroesItem";

function HeroesList({heroesList}) {
  return( 
  <div>
{heroesList.map((e, index) => <HeroesItem name={e.name} alignment={e.biography.alignment} image={e.images.md}/> )} </div>
  )
  };

export default HeroesList;
