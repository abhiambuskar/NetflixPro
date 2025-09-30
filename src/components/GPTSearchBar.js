import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS, Google_API_KEY, OPENAI_API_KEY } from '../utils/constants'
import { addGPTMovieResults } from '../utils/GPTSlice'
import Error from './Error'
import { GoogleGenerativeAI } from '@google/generative-ai';
import geminiModel from '../utils/gemini'


const GPTSearchBar = () => {
  const dispatch = useDispatch()
  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null)

  const searchMovieTMDB = async (movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1", API_OPTIONS)

    const json = await data.json();
    return json.results
  }



  const handleGPTSearchClick = async () =>{
      console.log(searchText.current.value)
      console.log(Google_API_KEY)
      // const completion = await openai.chat.completions.create({
      //   model: 'gpt-4o',
      //   messages: [
          
      //     { role: 'user', content: GPTQuery },
      //   ],
      // });

      // console.log(completion.choices);

      const googleAI = new GoogleGenerativeAI(Google_API_KEY);
      const generationConfig = {
        temperature: 0.7,  // Adjust for desired creativity vs. accuracy
        topP: 1.0,         // Controls sampling (1.0 for more likely choices)
      };
      const GPTQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value +" only give me names of 5 movies seperated by commas like the Example : Dhoom, Don, Om, CJ7, Phook"
      const geminiModel = googleAI.getGenerativeModel({
        model: 'gemini-2.5-flash', // Or other suitable model for movie recommendations
        generationConfig,
      });
      try {
        const gptResults = await geminiModel.generateContent(GPTQuery);
        if (!gptResults.response) {
          return <Error />
        }
        const movieList  = gptResults.response.text()
        console.log('GPT Results:', movieList);

        const gptMovies = movieList.split(",")
        console.log(gptMovies)

        const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));
        //the result will be array of promise [promise1, promise2, promise3 ] promise will take some time to return
        const tmdbSearchedResults = await Promise.all(promiseArray);
        console.log('tmdb Searched Results:', tmdbSearchedResults);
        dispatch(addGPTMovieResults({movieNames: gptMovies , movieResults : tmdbSearchedResults}))
      } catch (error) {
        console.error('Error:', error);
      }


  }

  return (
    <div className='pt-[35%] md:pt-[15%] flex justify-center '>
      <form typeof='text' className='w-full md:w-1/2 bg-black rounded-full  grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>

        <input className='pt-4 px-3 pb-2 m-1 col-span-10 rounded-l-full' ref={searchText} placeholder= {lang[langKey].gptplaceholderText} />
        <button onClick={handleGPTSearchClick} className='bg-red-500 rounded-r-full m-1 col-span-2 p-2 text-white font-bold text-xl'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
