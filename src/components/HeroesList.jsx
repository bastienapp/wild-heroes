import React, { useState } from "react";
import HeroesItem from "./HeroesItem";
/*
{
    "id": 1,
    "name": "A-Bomb",
    "slug": "1-a-bomb",
    "biography": {
      "alignment": "good"
    }
    "powerstats": {
        "intelligence": 38,
        "strength": 100,
        "speed": 17,
        "durability": 80,
        "power": 24,
        "combat": 64
    },
    "images": {
        "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg",
    }
}
*/
function HeroesList({ heroes }) {
const[alignment, setAlignment] = useState('all')

  return (
    <div style={{display: "grid" , gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem"  }}>
      <div>
    <button onClick={() => setAlignment('all')}>All</button>
    <button onClick={() => setAlignment('good')}>Good</button>
    <button onClick={() => setAlignment('bad')}>Evil</button>
      </div>

      {heroes.filter(hero => alignment === 'all' || hero.biography.alignment === alignment )
      .map(hero => <HeroesItem key={hero.id} hero={hero} />)}
    </div>
  )
}
export default HeroesList;
