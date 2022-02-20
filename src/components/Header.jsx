import React from 'react';
import styled from 'styled-components';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header(){
    return(
        <HeaderContainer >
          {/* header left */}
          <HeaderLeft>
						<HeaderAvatar 
            // TODO: add image and onclick
            />
            <AccessTimeIcon />
          </HeaderLeft>
          {/* header middle */}
          <HeaderMiddle>
            <input type="text" placeholder='search forum'/>
            <SearchIcon />
          </HeaderMiddle>
          {/* header right */}
          <HeaderRight>
            <HelpOutlineIcon/>
          </HeaderRight>
        </HeaderContainer>
    )
}
export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--forum-color);
  color: white;
  `
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  >.MuiSvgIcon-root{
    margin-right: 30px;
    margin-left: auto;
  }
`    
const HeaderMiddle = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  background-color: #3062d6;
  display: flex;
  padding: 0 50px;
  color: #fff;
  border: 1px #a1a1a1 solid;
  >input{
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: #fff;
  }
`
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover{
  opacity: 0.8;
}
`
const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;

>.MuiSvgIcon-root{
  margin-left: auto;
  margin-right: 20px;
}

`