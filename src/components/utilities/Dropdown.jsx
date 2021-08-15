import React from "react";

import "./dropdown.css"

export function DropdownAction(e) {
	let dropcontainer = e.target.closest("#dropdown-container");
	if(dropcontainer){
		dropcontainer.classList.add("show");
	}
	console.log("here", dropcontainer);
	
	//.classList.add("show");
}
  
//Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
// 	if (!e.target.matches('.dropbtn')) {
// 	var myDropdown = document.getElementById("dropdown-container");
// 		if (myDropdown.classList.contains('show')) {
// 			myDropdown.classList.remove('show');
// 		}
// 	}
// }

export default function Dropdown(props) {
	return (
		<div className="dropdown">
            <div >Sign Out</div>
        </div>
	)
}
