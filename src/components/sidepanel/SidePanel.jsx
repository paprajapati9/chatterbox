import React, { useEffect, useState } from "react";
import Channels from "../channels/Channels";
import User from "../user/User";
import SidepanelOption from "./SidepanelOption";

import "./sidepanel.css";
import CommentIcon from '@material-ui/icons/Comment';
import { Add, Apps, ChangeHistoryOutlined, DraftsOutlined, ExpandLess, ExpandMore, FileCopy, InboxOutlined, PeopleAlt } from "@material-ui/icons";
import { firestore } from "../../firebase";


export default function SidePanel(props) {
	const [channels, setChannels] = useState([]);
	
	useEffect(() => {
		firestore.collection('channels').onSnapshot(snapshot => {
			setChannels(
				snapshot.docs.map(doc => ({
					id: doc.id,
					name : doc.data().name
				}))
			)
		})
	}, [])

	console.log(props.user);
	return (
		<div className="side-panel">
			{/* <h1 className="app-title">ChatterBox</h1> */}
			<User 
				img = {props.user.photoURL} 
				userName = {props.user.displayName}
				hasDropdown = {true}
			/>
			<br />
			<SidepanelOption Icon = {CommentIcon} title = "Threads" />
			<SidepanelOption Icon = {InboxOutlined} title = "Mentions & reactions" />
			<SidepanelOption Icon = {DraftsOutlined} title = "Saved items" />
			<SidepanelOption Icon = {ChangeHistoryOutlined} title = "Channel browser" />
			<SidepanelOption Icon = {PeopleAlt} title = "People & user groups" />
			<SidepanelOption Icon = {Apps} title = "Apps" />
			<SidepanelOption Icon = {FileCopy} title = "File Browser" />
			<SidepanelOption Icon = {ExpandLess} title = "Show less" />
			<hr></hr>
			<SidepanelOption Icon = {ExpandMore} title = "Channels" />
			<hr />
			<SidepanelOption Icon = {Add} title = "Add Channel" addChannelOption = {true} />
			{channels.map((channel) => (
				<SidepanelOption title = {channel.name} id = {channel.id}/>
			))}
			<hr />
			<Channels 
				user = {props.user}
			/>
		</div>
	)
}
