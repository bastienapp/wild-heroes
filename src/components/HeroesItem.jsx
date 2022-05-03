import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function HeroesItem(props) {
  const {heroInfos} = props;
  const [ isFavourite, setisFavourite] = useState(false)

  const handleClicksFavourite = () => {
    setisFavourite(!isFavourite)
  }

  return (
  <div className="hero-card">    
      <h1>{heroInfos.name}</h1> 
      <Link to={`/heroes/${heroInfos.id}`}>
      <img src= {heroInfos.images.xs}  alt = "hero pic" style={{width: "8rem"}}/>
      </Link>
      <h2>{heroInfos.biography.alignment}</h2>
      <button type="button" onClick={handleClicksFavourite}>{isFavourite ? "Je suis un favori" : "Je suis mal-aimé"}</button>
      
  </div>
  );
  
}

export default HeroesItem;
