import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-64 px-20 w-screen aspect-video absolute bg-gradient-to-r from-black'>
        <h1 className='font-bold text-3xl w-1/3 text-white'>{title}</h1>
        <p className='w-1/3 text-white'>{overview}</p>
        <div className='p-5' >
            <button className='bg-white h-10 m-2 px-6 rounded-lg text-black font-bold hover:bg-opacity-50'>▶️Play</button>
            <button className='bg-gray-500 m-2 h-10 px-8 rounded-lg text-white font-bold hover:bg-opacity-50'>More Infoℹ️</button>
        </div>
    </div>
  )
}

export default VideoTitle
