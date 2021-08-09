import React, {useContext} from "react";
import { Router } from "@reach/router";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
// import PasswordReset from "./PasswordReset";

import "../index.css";
import { UserContext } from "../providers/UserProvider";

function Application() {
	const user = useContext(UserContext);
  	return (
        user ? 
		<Dashboard />
		 :
        <Router>
			<SignIn path="/" />
			<SignUp path="sign-up" />
			
			{/*<PasswordReset path = "passwordReset" /> */}
        </Router>

  	);
}
export default Application;