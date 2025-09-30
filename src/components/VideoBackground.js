import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieid}) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    useTrailerVideo(movieid)
  return (
    <div className='w-full'>
        <iframe 
            className='w-full aspect-video'
            src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key }
            title="YouTube video player" 
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
        >          
        </iframe>
    </div>
  )
}

export default VideoBackground
