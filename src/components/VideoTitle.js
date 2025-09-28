import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] md:pt-64 px-6 md:px-20 w-screen aspect-video absolute bg-gradient-to-r from-black'>
        <h1 className='font-bold text-lg md:text-3xl w-1/3 text-white'>{title}</h1>
        <p className='w-1/3 hidden md:inline-block text-white'>{overview}</p>
        <div className='p-5' >
            <button className='bg-white md:h-10 m-2 h-7 px-4 md:px-6 rounded-lg text-black font-bold hover:bg-opacity-50'>▶️Play</button>
            <button className='bg-gray-500 hidden md:inline-block m-2 h-10 px-8 rounded-lg text-white font-bold hover:bg-opacity-50'>More Infoℹ️</button>
        </div>
    </div>
  )
}

export default VideoTitle
