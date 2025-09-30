import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'
import Footer from './Footer'


const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()

  const showGPTSearchView = useSelector((store) => store.gpt.showGPTSearch)
  
  return (

    //overflow-y-auto no-scrollbar w-screen
    <div className=''>
        <Header/>
        {
          showGPTSearchView ?
          <GPTSearch/>:
          <>
            <MainContainer/>
            <SecondaryContainer/>
            <Footer/>
          </>
        }
        


    </div>
  )
}

export default Browse
