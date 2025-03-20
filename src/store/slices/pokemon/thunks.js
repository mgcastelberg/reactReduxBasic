import { pokemonApi } from "../../../api/pokemonApi";
import { setPockemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0) => {
  return async (dispatch, getState) => {
    dispatch( startLoadingPokemons() );
    // TODO: hacer peticion http
    // // Con Fech API
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    // const data = await resp.json();
    // console.log(data);

    // Con Axios
    const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    // console.log(data);

    // data-pokemons
    dispatch( setPockemons({pokemons: data.results, page: page}) );
  }
}
