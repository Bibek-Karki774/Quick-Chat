import React from 'react'

const ConversationWindow = ({children}) => {
  return (
    <div className = 'w-[22%] h-screen'>
      {children}
    </div>  
  )
}

export default ConversationWindow
