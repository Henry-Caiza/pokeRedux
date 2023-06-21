import React, { useState } from 'react'
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

const viewPokemonsFav = (listOfPokemons) => {
    return listOfPokemons.map((pokemon) => {
        if (pokemon.isFavorite) {
            return <PokemonCard
                name={pokemon.name}
                key={pokemon.name}
                image={pokemon.sprites.other.home.front_default}
                types={pokemon.types}
                isFavorite={pokemon.isFavorite}
                id={pokemon.id}
                stats={pokemon.stats}
            />
        }
    })
}

function PokemonList({ pokemons, searchedPokemons, }) {
    const [isChecked, setIsChecked] = useState(false);
    if (searchedPokemons.length > 0) {
        return (
            <div className='w-full relative'>
                <div className={`${isChecked ? 'hidden' : 'grid'} grid-flow-row grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-9 sm:gap-x-8 sm:gap-y-12 w-full mt-12 `}>
                    {typeOfListPokemons(searchedPokemons)}
                </div>
                <div className='w-2/10 flex gap-4 items-center justify-center absolute -top-8 right-0  sm:mr-0  '>
                    <label htmlFor="favorites" className='text-violet-100 '>&#9825; Favorites</label>
                    <input type="checkbox" id='favorites' className='sm:w-4 sm:h-4' name='favorites' checked={isChecked}
                        onChange={() => {
                            setIsChecked((prev) => !prev)
                        }} />
                </div>
                <div className={`${isChecked ? 'flex' : 'hidden'} flex-col sm:gap-x-2 sm:gap-y-4 w-full mt-8`}>
                    <h2 className='text-lg sm:text-2xl text-violet-200 font-semibold text-center'>Favorites Pokemons</h2>
                    <div className={`grid grid-flow-row grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-9 sm:gap-x-8 sm:gap-y-12 w-full mt-12 `}>
                        {viewPokemonsFav(pokemons)}
                    </div>
                </div>

            </div>

        );
    }

    return (
        <div className='w-full relative'>
            <div className={`${isChecked ? 'hidden' : 'grid'} grid-flow-row grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-9 sm:gap-x-8 sm:gap-y-12 w-full mt-12`}>
                {typeOfListPokemons(pokemons)}
            </div>
            <div className='w-2/10 flex sm:gap-4 gap-1 items-center justify-center absolute -top-8 right-0 mr-2 sm:mr-0 '>
                <label htmlFor="favorites" className='text-violet-100  text-xs sm:text-base'>&#9825; Favorites</label>
                <input type="checkbox" id='favorites' name='favorites' className='sm:w-4 sm:h-4' checked={isChecked}
                    onChange={() => {
                        setIsChecked((prev) => !prev)
                    }} />
            </div>
            <div className={`${isChecked ? 'flex' : 'hidden'} flex-col sm:gap-x-2 sm:gap-y-4 w-full mt-8`}>
                <h2 className='text-lg sm:text-2xl text-violet-200 font-semibold text-center'>Favorites Pokemons</h2>
                <div className={`grid grid-flow-row grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-9 sm:gap-x-8 sm:gap-y-12 w-full mt-12 `}>
                    {viewPokemonsFav(pokemons)}
                </div>
            </div>

        </div>

    )

}
PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export { PokemonList }

