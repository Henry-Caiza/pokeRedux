import React from 'react'
import { PokemonCard } from './PokemonCard'

function typeOfListPokemons(listOfPokemons) {

    return listOfPokemons.map((pokemon) => {
        return <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.other.home.front_default}
            types={pokemon.types}
            isFavorite={pokemon.isFavorite}
            id={pokemon.id}
            stats={pokemon.stats}
        />
    })
}

function PokemonList({ pokemons, searchedPokemons, }) {

    if (searchedPokemons.length > 0) {
        return (
            <div className={`grid grid-flow-row grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-9 sm:gap-x-8 sm:gap-y-12 w-full mt-12 `}>
                {typeOfListPokemons(searchedPokemons)}
            </div>
        );
    }

    return (
        <div className={`grid grid-flow-row grid-cols-5  gap-x-8 gap-y-12 w-full mt-12 `}>
            {typeOfListPokemons(pokemons)}
        </div>
    )

}
PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export { PokemonList }

