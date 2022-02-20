import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, 
	ExpandMore, FiberManualRecord, FileCopy, Inbox, 
  InsertComment, PeopleAlt } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import SideBarOption from './SideBarOption';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 

function SideBar() {
		const [channels, loading, error] = useCollection(collection((db), 'rooms'));
  return (
    <SideBarContainer>
      <SideBarHeader>
				<SideBarInfo>
					<h2>SCU Forum</h2>
					<h3>
						<FiberManualRecord />
						ssozi paul
					</h3>
				</SideBarInfo>
				<Create />
			</SideBarHeader>

			<SideBarOption Icon={InsertComment}  title="Threads"/>
			<SideBarOption Icon={Inbox}  title="Mentions & Reactions"/>
			<SideBarOption Icon={Drafts}  title="Saved Icons"/>
			<SideBarOption Icon={BookmarkBorder}  title="Channel Browser"/>
			<SideBarOption Icon={PeopleAlt}  title="People & User Groups"/>
			<SideBarOption Icon={Apps}  title="Apps"/>
			<SideBarOption Icon={FileCopy}  title="File Browser"/>
			<SideBarOption Icon={ExpandLess}  title="Show less"/>
			<hr />
			<SideBarOption Icon={ExpandMore}  title="Channels"/>
			<hr />
			<SideBarOption Icon={Add} addChannelOption  title="Add Channel"/>
			{channels?.docs.map(doc =>(
				<SideBarOption key={doc.id} id={doc.id} title={doc.data().name}/>
			))}
    </SideBarContainer>
  )
}

export default SideBar;

const SideBarContainer = styled.div`
	background-color: var(--forum-color);
	color: #fff;
	flex: 0.3;
	border-top: 1px solid #fff;
	max-width: 260px;
	margin-top: 58px;

	>hr{
		margin-top: 10px;
		margin-bottom: 10px;
		border: 1px solid #3062d6;
	}
`;

const SideBarHeader = styled.div`
 	display: flex;
 	border-bottom: 1px solid #fff;
 	padding-bottom: 10px;
	padding: 13px;
 >.MuiSvgIcon-root{
	 padding: 8px;
	 color: #fff;
	 font-size: 18px;
	background-color: #3062d6;
	border-radius: 50%;
}
`;
const SideBarInfo = styled.div`
	flex: 1;
	>h2{
		font-size: 15px;
		font-weight: 900;
		margin-bottom: 5px;
	}
	>h3{
		display: flex;
		font-size: 12px;
		font-weight: 400;
		align-items: center;

	}
	 >h3 >.MuiSvgIcon-root{
		 font-size: 14px;
		 margin-top: 1px;
		 margin-right: 2px;
		 color: #27FF01
	 }
`;