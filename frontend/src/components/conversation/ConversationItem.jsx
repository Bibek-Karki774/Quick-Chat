import React from 'react'
import Logo from "../../assets/Logo.png";
import useConversationStore from '../../store/ConversationStore';

const ConversationItem = ({conversation}) => {
     const { selectedConversation, setSelectedConversation } = useConversationStore();
     const isActive = conversation._id === selectedConversation?._id
  return (
    <div onClick={()=>setSelectedConversation(conversation)}
     className={`flex flex-row gap-x-3 rounded-lg border border-red-500 p-4 w-[95%] ${isActive ? "bg-blue-100" : "hover:bg-gray-100"}}`}>
      <div className='rounded-full border w-12 h-12'>
        <img src={Logo} className='w-full h-full object-cover' />
      </div>
      <div>
        <h3 className='text-base font-semibold'>Bibek Karki</h3>
        <p className='text-sm text-gray-500'>You: Hello, how are you ? <span> · 6h</span></p>
      </div>
    </div>
  )
}

export default ConversationItem
