import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidePanel from "../components/sidepanel/SidePanel";
import { UserContext } from "../providers/UserProvider";
import Chat from "./Chat";
import Header from "./Header";

function Dashboard(){

	const user = useContext(UserContext);
  	const {photoURL, displayName, email} = user;
    return (
		<div className="dashboard">
			<Header />
			<div className="dashboard-main">
				<Router>
					<SidePanel 
						user = {user}
					/>
					<Switch>
						<Route path="/channel/:channelId">
							<Chat />
						</Route>
						<Route>
							<h1>Welcome {displayName}</h1>
						</Route>
					</Switch>
				</Router>
			</div>
			
			
		</div>
    );
};

export default Dashboard;