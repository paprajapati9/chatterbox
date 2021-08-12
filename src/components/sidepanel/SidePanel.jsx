import React from "react";
import User from "../user/User";

import "./sidepanel.css";

export default function SidePanel(props) {
	return (
		<div className="side-panel">
			<h1 className="app-title">ChatterBox</h1>
			<User 
				img = {props.user.photoURL}
				userName = {props.user.displayName}
				hasDropdown = {true}
			/>
		</div>
	)
}
