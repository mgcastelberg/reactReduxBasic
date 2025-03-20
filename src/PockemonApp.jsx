import React, { useEffect } from 'react'
import { getPokemons } from './store/slices/pokemon';
import { useDispatch, useSelector } from 'react-redux';

export const PockemonApp = () => {

  const { pokemons, isLoading, page } = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  // console.log(pokemons)

  useEffect(() => {
    dispatch( getPokemons() );
  }, []);

  return (
    <>
        <h1>PockemonApp</h1>
        <hr />

        <span>Loading: { isLoading ? 'true' : 'false' } - Page: {page + 1}</span>
        
        <ul >
            {
              pokemons.map( (pokemon) => (
                <li style={{ textTransform: 'capitalize', textAlign: 'left' }} key={ pokemon.name }>{ pokemon.name }</li>
              ))
            }
        </ul>
        {
          page < 1 
          ? <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={ () => dispatch( getPokemons(0) ) } disabled>Prev</button>
          : <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={ () => dispatch( getPokemons(page - 1) ) }>Prev</button>
        }
        <button className='btn btn-primary' onClick={ () => dispatch( getPokemons(page + 1) ) }>Next</button>
    </>
  )
}
