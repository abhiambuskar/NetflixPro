import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies)
  return (
    <div className=''>
      <h4 className='font-bold text-lg md:text-xl text-white'>{title}</h4>
        <div className='flex overflow-x-scroll no-scrollbar'>
            
            <div className='flex '>
                {movies && movies?.map(movie=><MovieCard key={movie.id} movie={movie} posterPath={movie?.poster_path} />)} 
             
            </div>
        </div>

    </div>
  )
}

export default MovieList
