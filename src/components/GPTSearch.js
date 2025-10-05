import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constants'
import Footer from './Footer'

const GPTSearch = () => {
  return (

    <>
      <div className='fixed -z-10'>
          <img src={BG_URL} alt='bg' className='h-screen object-cover'/>
          
      </div>

      <div className=''>      
        <GPTSearchBar/>
        <GPTMovieSuggestion/>
        
      </div>    
    </>

  )
}

export default GPTSearch
