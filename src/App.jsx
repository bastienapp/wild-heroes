import "./App.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeroesList from "./components/HeroesList";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App(props) {
  const [heroes, setHeroes] = useState([]);
 useEffect(() => {
   axios.get('https://akabab.github.io/superhero-api/api/all.json')
   .then(response => setHeroes(response.data))
   .catch(error => console.error(error));

 }, [])

  return (
  <Router>
    <div className='App'>
      <Routes>
        <Route path="/" element={<HeroesList  heroes={heroes} />}/>
      </Routes>
      {/* TODO create /heroes:/id route */}
    </div>
  </Router>);
}

export default App;
