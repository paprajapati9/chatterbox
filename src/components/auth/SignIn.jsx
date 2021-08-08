import React, {useState} from "react";
import { Link } from "@reach/router";

import "./auth.css";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'email') {
            setEmail(value);
        }
        else if(name === 'password'){
            setPassword(value);
        }
    };

    return (
        <div className="form-signin">
            <h1 className="text-center">Sign In</h1>
            {error !== null && <div className = "text-center">{error}</div>}
            <form className="form">
                <input 
                    name="email" 
                    id="email" 
                    value = {email} 
                    onChange = {(event) => onChangeHandler(event)} 
                    type="email" 
                    placeholder="Email" 
                />
                <input 
                    name="password" 
                    id="password" 
                    value = {password} onChange = {(event) => onChangeHandler(event)} 
                    type="password" placeholder="Password" 
                />
                <button 
                    className="bg-green"
                    type="submit" 
                    onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>Login
                </button>
                <p className="text-center">or</p>
                <button className="bg-red">Sign in with Google</button>
                <br />
                <p className="text-center">Don't have an account?{" "}
                    <Link to="sign-up" className="link">
                        Sign up here
                    </Link>
                </p>
                <p className="text-center">
                    <Link to = "password-reset" className="link">
                        Forgot Password?
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignIn;