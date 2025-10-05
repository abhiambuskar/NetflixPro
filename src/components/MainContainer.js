import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if(movies === null){
        return <div className=' w-screen h-screen pl-10 pt-28 font-bold text-3xl text-red-600 bg-black'>
          <h1>Sorry for the inconvenience</h1>
          <h1>Looks Like the Backend is not working...</h1>
          <h2>Please comeback after sometime!!!</h2>
        </div>
    }
    console.log(movies)

    const mainMovie = movies[0];
    const {overview, title, id} = mainMovie

  return (
    <div className='pt-[30%]   bg-black md:pt-0'>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieid={id}/>
      
    </div>
  )
}

export default MainContainer
