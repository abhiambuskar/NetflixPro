import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import MovieModal from './MovieModal'

const MovieCard = ({posterPath, movie}) => {

    const [showModal, setShowModal] = useState(false)
  if(!posterPath){
    return null
  }

  // return (
  //   <div className='w-20  md:w-28 m-1 p-1 rounded-lg hover:border-2 border-white'>
  //     <img alt='Movie card' src={IMG_CDN_URL + posterPath}/>
  //   </div>
  // )



  if (!movie?.poster_path) return null

  return (
    <div>

      <div className='w-20  md:w-28 m-1 p-1 rounded-lg hover:border-2 border-white' onClick={() => setShowModal(true)}>
        <img alt='Movie card' src={IMG_CDN_URL + posterPath}/>
     
      </div>

       {showModal && (
        <MovieModal 
          movie={movie} 
          onClose={() => setShowModal(false)} 
        />
      )} 

      </div>
   
  )
}

export default MovieCard
