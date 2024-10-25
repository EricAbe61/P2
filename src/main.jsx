import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PokeCard from './PokeCard.jsx'
import PokeDetails from './PokeDetails.jsx'

const NumPokemon = 151;

const PokemonContainer = []

for (let i = 1; i <= NumPokemon; i++) {
  let Pokey =  <PokeCard id = {i}/>
  PokemonContainer.push(Pokey)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {PokemonContainer}
  </StrictMode>,
)
