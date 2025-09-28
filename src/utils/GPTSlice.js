import { createSlice } from "@reduxjs/toolkit";
import reducer from "./movieSlice";

const GPTSlice = createSlice({
    name:"GPTSlice",
    initialState:{
        showGPTSearch : false,
        movieNames: null,
        movieResults:null
    },
    reducers:{
        toggleGBTSearchView(state){
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTMovieResults(state, action){
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export const {toggleGBTSearchView, addGPTMovieResults} = GPTSlice.actions

export default GPTSlice.reducer