import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (

    <>
      <div className='fixed -z-10'>
          <img src={BG_URL} alt='bg' className=' object-cover'/>
      </div>

      <div className=''>      
        <GPTSearchBar/>
        <GPTMovieSuggestion/>
      </div>    
    </>

  )
}

export default GPTSearch
