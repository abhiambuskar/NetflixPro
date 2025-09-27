import { createSlice } from "@reduxjs/toolkit";
import reducer from "./movieSlice";

const GPTSlice = createSlice({
    name:"GPTSlice",
    initialState:{
        showGPTSearch : false,
    },
    reducers:{
        toggleGBTSearchView(state){
            state.showGPTSearch = !state.showGPTSearch
        }
    }
})

export const {toggleGBTSearchView} = GPTSlice.actions

export default GPTSlice.reducer