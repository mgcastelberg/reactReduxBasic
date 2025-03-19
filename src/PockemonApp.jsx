import React, { useEffect } from 'react'
import { getPokemons } from './store/slices/pokemon';
import { useDispatch } from 'react-redux';

export const PockemonApp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  }, []);

  return (
    <>
        <h1>PockemonApp</h1>
        <hr />

        <ul>
            <li>Hello</li>
            <li>World</li>
        </ul>
    </>
  )
}
