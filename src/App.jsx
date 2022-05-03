import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import HeroesList from "./components/HeroesList";
import HeroesDetail from "./components/HeroesDetail";

function App() {
  const [listHero, setListHero] = useState([]);

  useEffect(() => {
    const urlAPI = "https://akabab.github.io/superhero-api/api/all.json";
    axios.get(urlAPI).then((response) => setListHero(response.data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroesList heroesList={listHero} />} />
        <Route path="/heroes/:id" element={<HeroesDetail heroesList={listHero} />} />
      </Routes>
    </Router>
  );
}

export default App;
