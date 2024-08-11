import React from 'react';
import ChatMessage from './ChatMessage';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import { useSelector } from 'react-redux';
import { generateRandomNames, makeRandomMessage } from '../utils/Helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
        dispatch(addMessage({
            name: generateRandomNames(),
            message: makeRandomMessage(20),
        }))
        }, 2000);

        return () => {
            clearInterval(i);
        }
    },[]);

  return (
    <div>
        <div>
            <h1 className='ml-1 mt-5 p-2 border border-black text-2xl font-bold'>Live Chat</h1>
        </div>
        <div className='ml-1 p-2 border border-black w-[440px] h-[490px] bg-slate-100 overflow-y-scroll flex flex-col-reverse'>

        {chatMessages.map((c,i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
        </div>

        <form 
            className='ml-1 p-2 border border-black w-[440px] flex'
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: 'Vikash',
                    message: liveMessage,
                }));
                //For cleaning the input box after sending the message
                setLiveMessage('');
            }}
        >
            <input type='text' 
                className='w-[380px] p-2'
                placeHolder='Enter your message'
                value={liveMessage}
                onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button className='px-2 mx-2 bg-black rounded-sm text-white'>Send</button>
        </form>
    </div>
  )
}

export default LiveChat
