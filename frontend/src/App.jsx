import React from 'react'
import { Outlet } from 'react-router-dom'
import useAuthStore from "./store/auth.store.js"
import { useEffect } from 'react'

const App = () => {
  const checkAuth = useAuthStore((state)=> state.checkAuth);
  
  useEffect(()=>{
    checkAuth();
  }, [])


  return (
    <>
    <div className='text-center'>NavBar</div>
    <Outlet />
    <div className='text-center' >Footer</div>
    
    </>
  )
}

export default App
