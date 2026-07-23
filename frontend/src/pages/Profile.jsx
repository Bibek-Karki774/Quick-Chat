import React from 'react'
import useAuthStore from "../store/auth.store";

const Profile = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      This is profile page
        <button type="button" className="border" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Profile
