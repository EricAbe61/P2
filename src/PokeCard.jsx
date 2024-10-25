import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokeDetails from './PokeDetails.jsx'

import { useEffect } from "react";

function App({id}) {

  const [PokemonName, SetPokemonName]=useState("")
  const [PokemonImage, SetPokemonImage]=useState("")
  const [VeiwDetails, SetVeiwDetails]=useState(false)


  useEffect(() => {
    console.log("hello")
    try {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {SetPokemonName(data.species.name)
          SetPokemonImage(data.sprites.front_default);
        });
      } catch(error){console.log("Nothing Found")}
  } , [])

  if (VeiwDetails == true) {
    return(
      <div id = "PokemonCard">
        <h1>{PokemonName}</h1>
        <img src={PokemonImage} alt="pokemon picture"> 
        </img>
        <button onClick = {() => SetVeiwDetails(false)}></button>
        <PokeDetails />
      </div>
    )
  } else {
    return(
      <div id = "PokemonCard">
        <h1>{PokemonName}</h1>
        <img src={PokemonImage} alt="pokemon picture"> 
        </img>
        <button onClick = {() => SetVeiwDetails(true)}></button>
      </div>
    )
  }
}

export default App;