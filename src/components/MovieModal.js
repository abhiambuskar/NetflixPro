import React, { useEffect } from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieModal = ({ movie, onClose }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div 
      className='fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div 
        className='bg-gray-900 rounded-lg max-w-4xl w-[40%] max-h-[90vh] h-[70%] overflow-y-auto no-scrollbar'
        onClick={(e) => e.stopPropagation()} 
      >
      
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10'
        >
          ✕
        </button>

      
        {movie.backdrop_path && (
          <div className='relative h-48 w-full md:h-48 flex'>
            <img
              src={IMG_CDN_URL + movie.backdrop_path}
              alt={movie.title}
              className='w-full h-full object-cover rounded-t-lg'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
          </div>
        )}

        <div className='p-6 text-white'>
          <div className='flex gap-6'>
           
            <div className='flex-1'>
              <h2 className='text-lg md:text-xl font-bold mb-2'>{movie.title}</h2>
              
              {movie.tagline && (
                <p className='text-gray-400 italic mb-4'>{movie.tagline}</p>
              )}

              <div className='flex gap-4 mb-4 text-sm'>
                {movie.release_date && (
                  <span className='bg-gray-700 px-3 py-1 rounded'>
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                )}
                {movie.vote_average && (
                  <span className='bg-yellow-600 px-3 py-1 rounded'>
                    ⭐ {movie.vote_average.toFixed(1)}
                  </span>
                )}
                {movie.runtime && (
                  <span className='bg-gray-700 px-3 py-1 rounded'>
                    {movie.runtime} min
                  </span>
                )}
              </div>

              
              <p className='text-gray-300 leading-relaxed mb-42'>
                {movie.overview || 'No overview available.'}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal