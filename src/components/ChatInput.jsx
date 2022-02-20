import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 

function ChatInput({channelName, channelId}) {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    console.log(channelId, channelName);
    e.preventDefault();
    if(!channelId){
      return false
    }
    const data = {
      message: input,
      timeStamp: serverTimestamp(),
      user: 'Paul Ssozi',
      userImage: 'https://media-exp1.licdn.com/dms/image/C5603AQE-EY3wjuqJ7g/profile-displayphoto-shrink_200_200/0/1640604301573?e=1651104000&v=beta&t=mnowS2jbcN355JdyBHr5gjW_A9wtCSItlqNoaksCxJE'
    }

    setDoc(doc(db, 'rooms', channelId), data);
    setInput('');
 };

  return (
    <ChatInputContainer>
      <form>
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #Room`}
        />
        <Button hidden type='submit' onClick={sendMessage}>SEND</Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput;
const ChatInputContainer = styled.div`
  border-radius: 20px;
  >form{
    position: relative;
    display: flex;
    justify-content: center;
  }
  >form>input{
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  >form>button{
    display: none !important;
  }
`;