import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/Auth';
import {login,logout} from './Store/AuthSlice'
import React from 'react';
import { Footer, Header } from './Components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=> {
        if(userData){
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      } )
      .finally(()=> setLoading(false))
  },[])


  return ! loading ? (
    <div className='min-h-screen flex items-center justify-center bg-gray-400 text-red-500'>
      <div className='bg-white p-6 rounded shadow-md w-full max-w-6xl mx-auto'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
        

      </div>
    </div>
  ) : ("hello")
}

export default App
