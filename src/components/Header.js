import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { NETFLIX_LOGO } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store =>store.user)
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


  return (
    <div className='absolute px-12 py-2 h-36 w-screen font-bold bg-gradient-to-b from-black z-10 flex justify-between' >
      <div>
        <img className='w-44' src={NETFLIX_LOGO} alt='login'/>
      </div>
    {user &&  <div className='flex p-2'>
        <img alt='usericon'  className='h-12 w-12 ' src={user?.photoURL}/>
        <button className='font-bold text-white h-12 w-24' onClick={handleclick}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
