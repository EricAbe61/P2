// import { useState, useEffect } from 'react'
// import './App.css'
// import PokeDetails from './PokeDetails.jsx'

// function App({id}) {

//   const [PokemonName, SetPokemonName]=useState("")
//   const [PokemonImage, SetPokemonImage]=useState("")
//   const [VeiwDetails, SetVeiwDetails]=useState(false)


//   useEffect(() => {
//     try {
//       fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then(response => response.json())
//         .then(data => {SetPokemonName(data.species.name)
//           SetPokemonImage(data.sprites.front_default);
//         });
//       } catch(error){console.log("Nothing Found")}
//   } , [])

//   if (VeiwDetails == true) {
//     return(
//       <div id = "PokemonCard">
//         <h1>{PokemonName}</h1>
//         <img src={PokemonImage} alt="pokemon picture"> 
//         </img>
//         <button onClick = {() => SetVeiwDetails(false)}></button>
//         <PokeDetails />
//       </div>
//     )
//   } else {
//     return(
//       <div id = "PokemonCard">
//         <h1>{PokemonName}</h1>
//         <img src={PokemonImage} alt="pokemon picture"> 
//         </img>
//         <button onClick = {() => SetVeiwDetails(true)}></button>
//       </div>
//     )
//   }
// }

// export default App;

import { useState, useEffect } from 'react';
import './App.css';
import PokeDetails from './PokeDetails.jsx';

function PokeCard({ id }) {
  const [PokemonName, setPokemonName] = useState("");
  const [PokemonImage, setPokemonImage] = useState("");
  const [viewDetails, setViewDetails] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        setPokemonName(data.species.name);
        setPokemonImage(data.sprites.front_default);
      })
      .catch(error => console.log("Nothing Found", error));
  }, [id]);

  return (
    <div id="PokemonCard">
      <h1>{PokemonName}</h1>
      <img src={PokemonImage} alt={`${PokemonName}`} />
      <button onClick={() => setViewDetails(!viewDetails)}>
        {viewDetails ? "Hide Details" : "Poke Details"}
      </button>
      {viewDetails && <PokeDetails id={id} />}
    </div>
  );
}

export default PokeCard;
