import React, { useState } from "react";
import { Link } from "@reach/router";

import "./auth.css";
import { auth, generateUserDocument } from "../../firebase";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);
    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        console.log(email, password);
        event.preventDefault();
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            generateUserDocument(user, {displayName:displayName});
        } catch (error) {
            setError('Error Signing up, Please try again after some time');
        }
        setEmail("");
        setPassword("");
        setDisplayName("");
        window.location.replace('/');
    };
    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "email") {
        setEmail(value);
        } else if (name === "password") {
        setPassword(value);
        } else if (name === "name") {
        setDisplayName(value);
        }
    };
  return (
    <div className="form-signup">
        <div className="form-container">
            <h1 className="text-center">Sign Up</h1>
            <div className="">
                {error !== null && (
                <div className="">
                    {error}
                </div>
                )}
                <form className="">
                    <input
                        type="text"
                        name="name"
                        value={displayName}
                        placeholder="Username"
                        id="name"
                        onChange={event => onChangeHandler(event)}
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        id="email"
                        onChange={event => onChangeHandler(event)}
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        id="password"
                        onChange={event => onChangeHandler(event)}
                    />
                    <button
                        className="bg-green"
                        onClick={event => {
                        createUserWithEmailAndPasswordHandler(event, email, password);
                        }}
                    >
                        Sign up
                    </button>
                    <p className="text-center">or</p>
                    <button className="bg-red">
                        Sign In with Google
                    </button>
                    <br />
                    <p className="text-center">
                        Already have an account?{" "}
                        <Link to="/" className="link">
                            Sign in here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  );
};
export default SignUpForm;