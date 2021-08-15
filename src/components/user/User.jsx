import React, {useState} from "react";
import {auth} from "../../firebase";

import "./user.css";

export default function User(props) {

	const [isActive, setActive] = useState('');

	const DropdownAction = (e) => {
		e.preventDefault();
		console.log(isActive, "isactive");
		if(isActive) setActive(false)
		else setActive(true);
	}

	window.onclick = function(e) {
		var myDropdown = document.getElementById("dropdown-container");
		if(!myDropdown) return;
		if (!(e.target == myDropdown || myDropdown.contains(e.target)) && isActive) {
			setActive(false)
		}
	}

	let dropClass = 'user-dropdown user-container ';
 	return (
		<div 
			id = {props.hasDropdown && 'dropdown-container'}
			className={props.hasDropdown ?  dropClass + (isActive && 'show '): 'user-container'} 
			onClick = {props.hasDropdown && DropdownAction}
		>
			<img src={props.img || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'} className="user-avatar"></img>
            <div className="user-name">{props.userName}</div>
			{props.hasDropdown && <i className="fa fa-caret-down"></i>}
			{props.hasDropdown && 
			<div className="dropdown">
				<div onClick = { () => {auth.signOut()} }>Sign Out</div>
			</div>
			}
		</div>
	)
}
