import React from "react";
import { useState } from "react";

function HeroesItem({name, alignment, image}) {

const [favourite, setFavourite]=useState(false) 
function handleClick () {
setFavourite(!favourite)
} 

  return <div>
    <h2>{name}</h2>
    <h2>{alignment}</h2>
    <img src={image} alt="héros"/>
    <button onClick={handleClick}>{favourite ? "Favourite" : "Add to favourite"}</button>

  </div>;
}

export default HeroesItem;
