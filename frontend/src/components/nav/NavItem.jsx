import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({to, children}) => {
  return (
   <NavLink
  to={to}
  className={({ isActive }) =>
  `flex items-center justify-center h-11 w-11 rounded-lg
   transition-colors duration-150 ease-out
   ${
     isActive
             ? "bg-[#5B3A8E] text-white"
             : "text-[#78716C] hover:bg-[#E5E3DC] hover:text-[#5B3A8E]"
   }`
}
>
  {children}
</NavLink>
  )
}

export default NavItem
