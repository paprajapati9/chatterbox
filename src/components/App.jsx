import React from "react";
import { Router } from "@reach/router";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
// import PasswordReset from "./PasswordReset";

import "../index.css";

function Application() {
  	const user = null;
  	return (
        user ? {} :
        <Router>
			<SignIn path="/" />
			<SignUp path="sign-up" />
			
			{/*<PasswordReset path = "passwordReset" /> */}
        </Router>

  	);
}
export default Application;