import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGBTSearchView } from '../utils/GPTSlice';
import { changelanguage } from '../utils/configSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store =>store.user)
  let gbtText = useSelector(store => store.gpt.showGPTSearch)
  const handleclick = () =>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate("/error")
    });

  }

    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          const {uid, email, displayName, photoURL} = user
          
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
          navigate("/browse")
      } else {
          dispatch(removeUser()) 
          navigate("/")
      }
      });
      return () => unsubscribe()
    }, [])

    const handleGPTSearch = () =>{
      dispatch(toggleGBTSearchView())
    }

    const handleLanguageChange = (e) =>{
      dispatch(changelanguage(e.target.value))
    }
    const GPTSearch = useSelector(store =>store.gpt.showGPTSearch)
  return (
    <div className='absolute px-12 py-2 h-36 w-screen font-bold bg-gradient-to-b from-black z-10 flex justify-between' >
      <div>
        <img className='w-44' src={NETFLIX_LOGO} alt='login'/>
      </div>
        

        {user &&  <div className='flex p-2'>       

      {GPTSearch && <select className='h-10 text-white bg-gray-800 rounded-lg' onClick={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((lang)=> <option value={lang.identifier}>{lang.name}</option> )}
      </select>}

        <button onClick={handleGPTSearch} className='text-white bg-purple-700 h-10 w-24 mx-4 hover:bg-purple-900  rounded-lg'>{gbtText? "Neflix View": "GPT Search"}</button>
        <img alt='usericon'  className='h-10 w-12 ' src={user?.photoURL}/>

        <button className='font-bold text-white h-10 w-24' onClick={handleclick}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
