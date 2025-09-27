import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)

  return (
    <div className='pt-[10%] flex justify-center '>
      <form typeof='text' className=' w-1/2 bg-black rounded-full  grid grid-cols-12'>
        <input className='pt-4 px-3 pb-2 m-1 col-span-10 rounded-l-full' placeholder= {lang[langKey].gptplaceholderText} />
        <button className='bg-red-500 rounded-r-full m-1 col-span-2 p-2 text-white font-bold text-xl '>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
