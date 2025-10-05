import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  // console.log(movies)

  // if(movies.nowPlayingMovies === null &&movies.PopularMovies === null &&movies.UpcomingMovies === null &&movies.TopRatedMovies === null ){
  //   return <h1 className='w-screen bg-red-600 h-48'>Seems Like the TMDB API is not working...</h1>
  // }

  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.PopularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>

      </div>
      
    </div>
  )
}

export default SecondaryContainer
