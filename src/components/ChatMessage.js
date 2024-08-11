import React from 'react';
import { FaCircleUser } from "react-icons/fa6";

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <FaCircleUser className="text-3xl" />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
