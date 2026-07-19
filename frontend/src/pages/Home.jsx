import React from 'react'
import useAuthStore from '../store/auth.store'
import NavRail from '../components/nav/NavRail'

const Home = () => {  
  const {logout} = useAuthStore()
  return (
 
    <div>
      <NavRail />

    <button type='button' className="border" onClick={logout}>Logout</button>
    </div>

  )
}

export default Home
