import React from "react";
import { Router } from "@reach/router";
import SignIn from "./auth/SignIn";

import "../index.css";
import SignUp from "./auth/SignUp";
// import ProfilePage from "./ProfilePage";
// import PasswordReset from "./PasswordReset";

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