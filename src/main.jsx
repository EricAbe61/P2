import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './index.css';
import PokeCard from './PokeCard.jsx';

const NumPokemon = 151;

const PokemonContainer = Array.from({ length: NumPokemon }, (_, i) => (
  <PokeCard id={i + 1} key={i + 1} />
));

// Welcome component
function Welcome() {
  return (
    <div>
      <h1 className="title">Welcome to PokeWiki!</h1>
      <p style={{ fontSize: '1.5rem', color: 'white', padding: '1rem' }}>
        Explore the world of Pokémon. Click on any Pokémon to learn more!
      </p>
    </div>
  );
}

// Pokedex component with the grid of Pokémon cards
function Pokedex() {
  return (
    <div>
      <h1 className="title">Pokedex</h1>
      <div className="pokemon-grid">
        {PokemonContainer}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div id="app-container">
        <Link to="/welcome" className="poke-wiki-button">Welcome to PokeWiki</Link>

        <Routes>
          <Route path="/welcome" element={<Welcome />} />

          <Route path="/pokemon/pokedex" element={<Pokedex />} />

          <Route path="/" element={<Navigate to="/pokemon/pokedex" />} />

          <Route path="*" element={<Navigate to="/pokemon/pokedex" />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
