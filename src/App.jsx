import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import HeroesList from "./components/HeroesList.jsx";

function App() {
  const [heroes, setHeroes] = useState([])
  useEffect(() => {
    axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((response) => {
        console.log(response.data);
        setHeroes(response.data)
      })
  }, []);

  return (
    <div className='App'>
       <HeroesList heroes={heroes}/>
    </div>
  );
}

export default App;
