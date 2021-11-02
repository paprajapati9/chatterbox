import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import { firestore } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import "./chat-input.css";

export default function ChatInput(props) {
    const { channelId, channelName } = props
    const [input, setInput] = useState("")
    const user = useContext(UserContext);
    console.log(user, "usre")
    const photoUrl = "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png";

    const inputKeyDown = (event) => {
        
        if(event.keyCode === 13){
            if (!event.altKey && !event.ctrlKey && !event.shiftKey) {
                event.preventDefault();
                sendMessage(event);
                console.log(event, "event")
            }
        }
    }


    const sendMessage = (e) => {
        e.preventDefault();
        if (!e.altKey && !e.ctrlKey && !e.shiftKey && e.keyCode === 13) {
            console.log(e, "event in send")
            // Trigger the button element with a click
        }
        if (channelId) {
            firestore
                .collection("channels")
                .doc(channelId)
                .collection("messages")
                .add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user: user?.displayName,
                    userImage: user?.photoURL || photoUrl
                })
        }

    }

    return (
        <div className="chat-input">
            <div className="user-chat-input">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                    onKeyDown={inputKeyDown}
                />
            </div>
        </div>
    )
}