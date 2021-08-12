import React, { useContext } from "react";
import SidePanel from "../components/sidepanel/SidePanel";
import { UserContext } from "../providers/UserProvider";

function Dashboard(){

	const user = useContext(UserContext);
  	const {photoURL, displayName, email} = user;
    return (
		<div className="dashboard">
			<SidePanel 
				user = {user}
			/>
		</div>
    );
};

export default Dashboard;