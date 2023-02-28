import './App.css'
import { Col } from 'antd'
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList'
import logo from './statics/logo.svg'
import { useEffect, useState } from 'react'
import {getPokemon} from './api'
import { setPokemons as setPokemonsActions } from './actions'
import { connect } from 'react-redux'
 
function App() {
/* Recibe props si lo usamos con connect en vez de Hooks de Redux */
  useEffect(() => {
    const fetchPokemons = async () => {
     const pokemonsRes = await getPokemon();
     setPokemons(pokemonsRes);
    }
    fetchPokemons();
  },
    [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

/* const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value ) => dispatch(setPokemonsActions(value)),
}); */

export default App;
/* Hacemos esto en el export si usamos connect(mapStateToProps,mapDispatchToProps)(App)*/