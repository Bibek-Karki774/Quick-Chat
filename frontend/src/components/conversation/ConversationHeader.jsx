import { Search } from 'lucide-react'
import React from 'react'

const ConversationHeader = () => {
  return (
    <div className='flex flex-col justify-center pt-2 pl-3 border'>
      <h3 className="text-2xl font-semibold mb-2">Chats</h3>
      <div className='relative flex-1 mb-2'>
        <Search size={18} strokeWidth={1} className='absolute left-2 top-2' />
        <input type='text'  placeholder='Search...' className='border w-[95%] pl-7 h-9 rounded-2xl outline-none'  />
      </div>
    </div>
  )
}

export default ConversationHeader
