import React from "react";
import "./message.css";

export default function Message(props){
    let {message, timestamp, user, userImage} = props;
    return(
        <div className="message">
            <img src={userImage} />
            <div className = "message-info">
                <h4>
                    {user} <span className="message-time">
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}