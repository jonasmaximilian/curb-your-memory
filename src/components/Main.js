import React, { useState, useEffect } from 'react';
import Scoreboard from './Score/Scoreboard';
import CardGrid from './CardGrid/CardGrid';
import { capitalizeFirstLetter, shuffleArray } from '../utils';

function Main() {
    const POKEMONS_AMOUNT = 12;
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [clickedPokemons, setClickedPokemons] = useState([]);

    useEffect(() => {
        const loadCards = async () => {
            setPokemons(shuffleArray(await fetchPokemons(POKEMONS_AMOUNT)));
        };
        loadCards();
    }, []);

    const fetchPokemons = async (amount) => {
        const pokemons = [];

        for (let i = 1; i <= amount; i++) {
            const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const response = await fetch(pokemonUrl);
            const pokemon = await response.json();
            const id = pokemon.id;
            const name = capitalizeFirstLetter(pokemon.name);
            const image = pokemon.sprites.front_default;
            pokemons.push({ id, name, image });
        }

        return pokemons;
    };

    const playRound = (pokemonName) => {
        if (clickedPokemons.includes(pokemonName)) {
            resetGame();
        } else {
            const newScore = currentScore + 1;
            if (newScore > bestScore) setBestScore(newScore);
            setCurrentScore(newScore);
            setClickedPokemons((prevState) => [...prevState, pokemonName]);
        }
    };

    const handleCardClick = (e) => {
        const pokemonName = e.target.parentNode.lastChild.textContent;
        playRound(pokemonName);
        setPokemons(shuffleArray(pokemons));
    };

    const resetGame = () => {
        setClickedPokemons([]);
        setCurrentScore(0);
    };

    return (
        <div>
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
            <CardGrid pokemons={pokemons} handleCardClick={handleCardClick} />
        </div>
    );
}

export default Main;
