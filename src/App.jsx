import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import HeroesList from "./components/HeroesList";


const link = 'https://akabab.github.io/superhero-api/api/all.json';


function App() {
  const [heroesList, setHeroesList]= useState([]);

  useEffect(() => {
    axios.get(link)
     .then(function (response) {   
       setHeroesList(response.data)    
     })
     .catch(function (error) {
       console.log(error);
     })
   }, []);
   
  return <div className='App'>TODO your code here!
      <HeroesList heroesList={heroesList}/>  
  </div>;
}

export default App;
