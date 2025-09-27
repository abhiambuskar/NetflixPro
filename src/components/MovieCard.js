import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-28 m-1 p-1 rounded-lg hover:border-2 border-white'>
      <img alt='Movie card' src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard
