import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      {!props.isRegistered && (
        <Input type="email" placeholder="Email" />
      )}
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{!props.isRegistered ? "Register" : "Login"}</button>
    </form>
  );
}

export default Form;