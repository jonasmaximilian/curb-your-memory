import React from 'react';
import Card from './Card';

function CardGrid({ pokemons, handleCardClick }) {
    const pokemonCards = pokemons.map((pokemon) => (
        <Card
            key={pokemon.id}
            pokemon={pokemon}
            handleCardClick={handleCardClick}
        />
    ));

    return (
        <div className='flex justify-center mt-10'>
            <div className='grid grid-cols-3 gap-10 justify-items-center p-10 border-2 max-w-3xl rounded-md'>
                {pokemonCards}
            </div>
        </div>
    );
}

export default CardGrid;
