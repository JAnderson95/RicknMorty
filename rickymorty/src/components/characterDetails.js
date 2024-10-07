import React, { useState, useEffect } from 'react';

function CharacterDetails({ character }) {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Extraer los IDs de episodios
    const episodeUrls = character.episode;
    const episodePromises = episodeUrls.map(url => fetch(url).then(res => res.json()));


    // Hacer fetch de todos los episodios
    
    Promise.all(episodePromises).then(data => {
      setEpisodes(data);
      setLoading(false);
    });
  }, [character.episode]);

  if (loading) {
    return <p>Loading details...</p>;
  }

  return (
    <div className="character-details">
      <h3>Origin: {character.origin.name}</h3>
      <h3>Location: {character.location.name}</h3>
      <h4>Episodes:</h4>
      <ul>
        {episodes.map(episode => (
          <li key={episode.id}>{episode.name} (Air Date: {episode.air_date})</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetails;
