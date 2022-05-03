import React from "react";

function HeroesItem(props) {
  const { name, alignment, image } = props;
  return (
    <div>
      <div>{name}</div>
      <div>{alignment}</div>
      <img src={image} alt={`Photo of ${name}`} />
    </div>
  )
}

export default HeroesItem;
