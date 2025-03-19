import { setPockemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0) => {
  return async (dispatch, getState) => {
    dispatch( startLoadingPokemons() );
    // TODO: hacer peticion http
    // data-pokemons
    // dispatch( setPockemons() );
  }
}
