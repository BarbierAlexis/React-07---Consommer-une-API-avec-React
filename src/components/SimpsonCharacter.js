import React from 'react';

function DisplaySimpsons({ simpsonCharacter }) {
  return (
    <div className="DisplaySimpsons">
      <h1>{simpsonCharacter.character}</h1>
      <img alt={simpsonCharacter.character}src={simpsonCharacter.image}/>
      <p><em>"{simpsonCharacter.quote}"</em></p>
      <p>Zone:{simpsonCharacter.characterDirection}</p>
    </div>
  );
};

export default DisplaySimpsons;