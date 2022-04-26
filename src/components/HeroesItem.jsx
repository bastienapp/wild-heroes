import React, { useState } from "react";

function HeroesItem({ hero }) {
const [isFavourite, setIsFavourite] = useState(false)
  return (
  <div>
    <p>{`Hello! I'm ${hero.name}, I'm a ${hero.biography.alignment} hero`} { hero.images.xs && <img src={hero.images.xs} />}</p>
    <button style={{width: "100px", margin: "0 auto"}} type="select" onClick={() => setIsFavourite(!isFavourite)}>{isFavourite ? "Favourite" : "Not Favourite"}</button>
    {<div style={{width: "50px", height: "50px" }}></div> }
  </div>
  );
}

export default HeroesItem;
