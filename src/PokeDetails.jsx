import { useState, useEffect } from 'react';

function PokeDetails({ id }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setDetails(data))
      .catch(error => console.log("Error fetching Pokémon details:", error));
  }, [id]);

  if (!details) return <p>Loading details...</p>;

  return (
    <div>
      <h2>{details.name.toUpperCase()}</h2>
      <p>Type: {details.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      <p>Abilities: {details.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
    </div>
  );
}

export default PokeDetails;

