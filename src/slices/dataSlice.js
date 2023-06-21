import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";


const initialState = {
    pokemonsFavorites: [],
    pokemons: [],
    pokemonsFiltered: [],
    pokemonOnModal: {
        id: 0,
        name: ''
    }
}
export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const pokemonsRes = await getPokemon();
        const pokemonsDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });
            // [...state.pokemonsFavorites, state.pokemons[currentPokemonIndex].isFavorite]
            console.log(state.pokemons);
            console.log([...state.pokemonsFavorites, state.pokemons[currentPokemonIndex].isFavorite]);
            const currentFilteredPokemonIndex = state.pokemonsFiltered.findIndex((pokemon) => {
                return pokemon.id === action.payload.pokemonId;
            });


            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].isFavorite;

                state.pokemons[currentPokemonIndex].isFavorite = !isFavorite
            }
            if (currentFilteredPokemonIndex >= 0) {
                const isFavorite = state.pokemonsFiltered[currentFilteredPokemonIndex].isFavorite

                state.pokemonsFiltered[currentFilteredPokemonIndex].isFavorite = !isFavorite
            }
        },
        setFilter: (state, action) => {
            const pokemonsFiltered = state.pokemons
                .filter(pokemon => pokemon.name.includes(action.payload))
            state.pokemonsFiltered = pokemonsFiltered;
        },
        setOpenModalCard: (state, action) => {
            const pokemonOnModal = findPokemon(state.pokemons, action.payload)
            return { ...state, pokemonOnModal: pokemonOnModal }
        }

    },

});

const findPokemon = (pokemonList, id) => {
    return pokemonList.find(element => element.id === id) || { id: 0, name: '', favorite: false }
}

export const { setFavorite, setPokemons, setFilter, setOpenModalCard } = dataSlice.actions;
export default dataSlice.reducer