import { useEffect } from 'react'
// import { getIn } from "immutable";
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Header } from './Components/Header'
import { Layout } from './Components/Layout'
import { PokemonList } from './Components/PokemonList'
import { LoadingSkeleton } from './Components/LoadingSkeleton'
import { ModalCard } from './Components/ModalCard'

import { fetchPokemonsWithDetails } from './slices/dataSlice';
import './App.css'

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchedPokemons = useSelector((state) => state.data.pokemonsFiltered, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);

  //const loading = false
  const dispatch = useDispatch();
  // const loading = useSelector(state => state.ui.loading)
  // const pokemons = useSelector((state) => getIn(state, ['data', 'pokemons'], shallowEqual)).toJS();
  // const loading = useSelector((state) => getIn(state, ['ui', 'loading']));
  //const pokemons = useSelector(state => state.pokemons)
  //const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
    // const fetchPokemons = async () => {
    //   dispach(setLoading(true))
    //   const pokemonsRes = await getPokemon()
    //   dispach(getPokemonsWithDetails(pokemonsRes))
    //   dispach(setLoading(false))
    // }
    // fetchPokemons()
  }, [])

  return (
    <Layout>
      {/* <ModalCard pokemons={pokemons} searchedPokemons={searchedPokemons} /> */}
      <Header />
      {
        loading ? <LoadingSkeleton /> :
          <PokemonList pokemons={pokemons} searchedPokemons={searchedPokemons} />
      }
      {/* <ModalCard /> */}
    </Layout>
  )
}

export default App
