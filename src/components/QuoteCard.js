import React from 'react';

function QuoteCard({quote,image,character}) {
  return (
    <div className="QuoteCard">
      <p className="Quote">{quote}</p>
      <p>{character}</p>
      <img
        src={image}
        alt={character}
      /> 
    
      
    </div>
  );
};

export default QuoteCard;