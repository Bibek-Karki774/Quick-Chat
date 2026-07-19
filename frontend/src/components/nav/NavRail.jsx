import React from 'react'
import {MessageCircle, Users, CircleUserRound} from "lucide-react"
import NavItem from "../nav/NavItem.jsx"


const NavRail = () => {
  return (
    <aside className='flex flex-col justify-between py-4 border h-screen w-[5%]'>
        <div className='flex flex-col gap-3'>
        <NavItem to="/">
            <MessageCircle />
        </NavItem>

        <NavItem to="/friends">
            <Users />
        </NavItem>

        <NavItem to="/settings">
            <MessageCircle />
        </NavItem>
        </div>


        <NavItem to="/profile">
             <CircleUserRound size={24} />
        </NavItem>
    </aside>
  )
}

export default NavRail
