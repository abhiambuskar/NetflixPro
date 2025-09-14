import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';

const Login = () => {

  const [signup, setsignup] = useState(false)
  const email = useRef(null)
  const name = useRef(null)
  const password = useRef(null)
  const [errorMsg, seterrorMsg] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () =>{
    // console.log(email.current.value)
    // console.log(password.current.value)

    const message = checkValidData(email.current.value, password.current.value)
    seterrorMsg(message)

    if(message){
      return
    }

    if(signup){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }).then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser
                          
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))

            navigate("/browse")
          }).catch((error) => {
            seterrorMsg(error.message)
          });

          console.log(user)
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg(errorCode + " - " + errorMessage)
        });
    }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg(errorCode + " - " + errorMessage)
        });
    }

  }

  return (

    <div>
            <Header/>
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_small.jpg' alt='background_img' className=''/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='bg-black p-12 w-3/12 absolute mx-auto right-0 left-0 mt-24 text-white rounded-lg opacity-90'>

                <h1 className='text-2xl font-bold'>{signup? "Sign Up":"Sign In"}</h1>
                {signup &&<input  ref={name} className='rounded-lg bg-gray-900 mt-5 p-2 m-2 w-full' type='text' placeholder='Name'/>}


                <input className='mt-3 rounded-lg p-2 w-full m-2 bg-gray-900' ref={email} type='text' placeholder='Email'/>
                <input className='rounded-lg mt-3 p-2 w-full m-2 bg-gray-900' ref={password} type='password' placeholder='Password'/>
                <button className='bg-red-700 mt-3 text-white rounded-lg p-2 m-2 w-full' onClick={handleClick}>{signup? "Sign Up":"Sign In"}</button>

                <p className='text-red-700'>{errorMsg}</p>

                <p className='cursor-pointer mt-3 text-sm m-2' onClick={()=>{
                  setsignup(!signup)
                }}>{signup?"Already registered User Sign In Now":"New to NetflixPro? Sign Up Now"}</p>
            </form>
    </div>
  )
}

export default Login
