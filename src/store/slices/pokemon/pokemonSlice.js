import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state ) => {
            state.isLoading = true;
        },
        setPockemons: (state, action ) => {
            console.log(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPockemons } = pokemonSlice.actions;