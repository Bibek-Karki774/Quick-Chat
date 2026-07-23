import React from 'react'

const ConversationList = ({children}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {children}
    </div>
  )
}

export default ConversationList
