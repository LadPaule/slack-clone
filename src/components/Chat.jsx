import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import {selectRoomId} from '../features/appSlice';
import ChatInput from './ChatInput';

function Chat() {

  const roomId = useSelector(selectRoomId);

  return (
    <ChatContainer>
      <>
        <Header>
          <Headerleft>
            <h4><strong>#Room-Name</strong></h4>
            <StarBorderOutlined />
          </Headerleft>
          <HeaderRight>
            <p>
              <InfoOutlined /> Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>
    {/* Todo: list all messages */}
        </ChatMessages>
        <ChatInput 
        // channelName
        // 
        channelId={roomId}
        />

        
      </>
    </ChatContainer>
    )
}

export default Chat;
const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderRight = styled.div`
  >p{
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  >p >.MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
const Headerleft = styled.div`
  display: flex;
  align-items: center;
> h4 {
  display: flex;
  text-transform: lowercase;
  margin-right: 10px;
}
>h4 > .MuiSvgIcon-root{
  margin-left: 20px;
  font-size: 18px;
}`;

const ChatMessages = styled.div`

`;