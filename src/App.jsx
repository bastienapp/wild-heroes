import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroesList from "./components/HeroesList";

function App() {
  const [listHero, setListHero] = useState([]);

  useEffect(() => {
    const urlAPI = "https://akabab.github.io/superhero-api/api/all.json";
    axios.get(urlAPI).then(response => setListHero(response.data))
  }, []);
  
  return (
  <div className="App">
    {
      <HeroesList heroesList={listHero}/>
    }
    
  </div>
  )
  ;
}

export default App;
