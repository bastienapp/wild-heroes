import React from "react";
import { useParams } from "react-router-dom";

function HeroesDetail({heroesList}) {
  const { id } = useParams();
  const heroe = heroesList[parseInt(id)-1]
  console.log(heroe)
  return <div>{`wesh je suis ${heroe.name}, i feel ${heroe.biography.alignment}`}</div>;
}

export default HeroesDetail;
