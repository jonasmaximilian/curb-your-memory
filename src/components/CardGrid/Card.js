import React from 'react';

function Card({ pokemon, handleCardClick }) {
    return (
        <div
            className='align-top inline-block text-center  p-5'
            onClick={handleCardClick}
        >
            <img src={pokemon.image} alt={pokemon.name} />
            <div className=''>
                <h2>{pokemon.name}</h2>
            </div>
        </div>
    );
}

export default Card;
