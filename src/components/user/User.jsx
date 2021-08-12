import React from "react";
import Dropdown from "../utilities/Dropdown";

import "./user.css";

export default function User(props) {
	return (
		<div className={props.hasDropdown ? 'user-dropdown user-container' : 'user-container'}>
			<img src={props.img || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'} className="user-avatar"></img>
            <div className="user-name">{props.userName}</div>
			{props.hasDropdown && <i class="fa fa-caret-down"></i>}
			{props.hasDropdown && <Dropdown />}
		</div>
	)
}
