import React from "react"
import { useParams } from "react-router-dom";

function HeroesDetail(heroesList) {
  
const params = useParams();

  return <div>
    <h1>{params.id}</h1>
  
  </div>;
}

export default HeroesDetail;
