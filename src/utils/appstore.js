import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import movieReducer from "./movieSlice"
import GPTReducer from "./GPTSlice";
import configReducer   from "./configSlice"

const appstore = configureStore({
    
    reducer:{
        user: userReducer,
        movies: movieReducer,
        gpt : GPTReducer,
        config: configReducer
    }
    
})

export default appstore