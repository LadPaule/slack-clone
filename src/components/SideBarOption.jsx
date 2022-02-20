import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { enterRoom } from '../features/appSlice';


function SideBarOption({ Icon, title, addChannelOption, id }) {
	const dispatch = useDispatch();
	const [channels, loading, error] = useCollection(collection((db), 'rooms'));
	const addChannel=()=>{
		const channelName=prompt('Enter a channel name');
		if(channelName){
			addDoc(collection(db, 'rooms'), {name:channelName});
		}
	};
	const selectChannel=()=>{
		if(id){
			dispatch(enterRoom({
				roomid: id
			}));
		}
	};

  return (
    <SideBarOptionContainer onClick={addChannelOption ? addChannel: selectChannel}>
      {Icon && <Icon fontSize="small" style={{padding:10}}/>}
			{Icon ?(
				<h3>{title}</h3>
			):(
				<SideBarOptionChannel>
					<span>#</span>{title}
				</SideBarOptionChannel>
			)}
    </SideBarOptionContainer>
  )
}

export default SideBarOption;

const SideBarOptionContainer = styled.div`
	display: flex;
	font-size: 12px;
	align-items: center;
	padding-left: 2px;
	cursor: pointer;
:hover{
	opacity: 0.9;
	background-color: #3062d6;
}
>h3{
	font-weight: 500;
}
>h3 >span{
	padding: 15px;
}
`;
const SideBarOptionChannel = styled.h3`
	padding: 10px 0;
	font-weight: 300;
`;