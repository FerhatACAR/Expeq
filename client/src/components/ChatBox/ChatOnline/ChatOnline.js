import React from "react"

const ChatOnline = ({ online }) => {
  return (
    <div className='chat-online'>
      <span>Çevrimiçi: {online}</span>
    </div>
  )
}

export default ChatOnline
