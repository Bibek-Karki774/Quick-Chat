import React from 'react'
import { Link } from 'react-router-dom'

const NavIcon = ({to, children}) => {
  return (
   <Link
      to = {to}
      className="p-3 rounded-lg bg-gray-300 h-12 w-12">
        {children}
   </Link>
  )
}

export default NavIcon
