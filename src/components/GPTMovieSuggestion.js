import React from 'react'
import { useSelector } from 'react-redux'
import Error from './Error'
import MovieList from './MovieList'

const GPTMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  // console.log(movieNames)
  // console.log(movieResults)
  return (
    <div className="">
      <div className='text-white p-4 m-4 bg-black  bg-opacity-90'>
        
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}

        {/* <MovieList title={movieNames[0]} movies={movieResults[0]} /> */}
      </div>
    </div>
  );
}

export default GPTMovieSuggestion
