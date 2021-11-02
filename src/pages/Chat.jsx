import React, { useEffect, useState } from 'react'
import "./Chat.css"
import { useParams } from 'react-router-dom'
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import { firestore } from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

export default function Chat(){
    const {channelId} = useParams();
    const [channelDetails, setChannelDetails] = useState();
    const [chatDetails, setChatDetails] = useState([]);

    useEffect( () => {
        if(channelId){
            firestore.collection("channels")
            .doc(channelId)
            .onSnapshot((snapshot) => setChannelDetails(snapshot.data()))

            firestore.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => 
                setChatDetails(snapshot.docs.map((doc) => doc.data()))
            )
        }
    }, [channelId])

    console.log(chatDetails, "chat details");

    console.log(channelDetails, "details");

    return (
        <div className="chat">
            <div className="chat-header">
                <div className="chat-header-left">
                    <h4 className="chat-channel-name">
                        <strong>#{channelDetails?.name }</strong>
                        <StarBorderOutlined></StarBorderOutlined>
                    </h4>
                </div>
                <div className="chat-header-right">
                    <p className="chat-channel-details">
                        <InfoOutlined />
                        Details
                    </p>
                </div>
            </div>
            <div className="chat-messages">
                {chatDetails.map(({message, timestamp, user, userImage}) => (
                    <Message 
                        message = {message}
                        timestamp = {timestamp}
                        user = {user}
                        userImage = {userImage}
                    />
                ))}
            </div>
            <div className="chat-message-sender">
                <ChatInput 
                    channelId = {channelId}
                    channelName = {channelDetails?.name }
                />
            </div>
        </div>
    )
}