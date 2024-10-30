import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PokeCard from './PokeCard.jsx';

const NumPokemon = 151;

const PokemonContainer = Array.from({ length: NumPokemon }, (_, i) => (
  <PokeCard id={i + 1} key={i + 1} />
));

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <div id="app-container">
      <h1 className="title">Pokedex</h1> {}
      <div className="pokemon-grid">
        {PokemonContainer}
      </div>
    </div>
  </StrictMode>
);



