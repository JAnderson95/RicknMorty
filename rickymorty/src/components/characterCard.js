import React, { useState } from 'react';
import CharacterDetails from './characterDetails';

function CharacterCard({ character }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && <CharacterDetails character={character} />}
    </div>
  );
}

export default CharacterCard;
