import React from 'react'
import {MessageCircle, Users, CircleUserRound} from "lucide-react"
import NavItem from "../nav/NavItem.jsx"


const NavRail = () => {
  return (
    <aside className='flex flex-col items-center justify-between py-4 border-r border-[#d2d0ca] bg-[#F0EFEA] h-screen w-17'>
        <div className='flex flex-col gap-3'>
        <NavItem to="/">
            <MessageCircle size={22} />
        </NavItem>

        <NavItem to="/friends">
            <Users size={22} />
        </NavItem>

        <NavItem to="/settings">
            <MessageCircle size={22} />
        </NavItem>
        </div>


        <NavItem to="/profile">
             <CircleUserRound size={30} />
        </NavItem>
    </aside>
  )
}

export default NavRail
