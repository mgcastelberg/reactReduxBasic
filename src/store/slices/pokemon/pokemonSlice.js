import { createSlice } from '@reduxjs/toolkit';

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
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
            // console.log(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPockemons } = pokemonSlice.actions;