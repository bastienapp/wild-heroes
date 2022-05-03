import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import HeroesList from "./components/HeroesList";
import HeroesDetail from "./components/HeroesDetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const link = "https://akabab.github.io/superhero-api/api/all.json";

function App() {
  const [heroesList, setHeroesList] = useState([]);

  useEffect(() => {
    axios
      .get(link)
      .then(function (response) {
        setHeroesList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<HeroesList heroesList={heroesList} />} />
        <Route path="/heroes/:id" element={<HeroesDetail heroesList={heroesList}/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

/* <BrowserRouter>
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
</Routes>
</BrowserRouter>, */