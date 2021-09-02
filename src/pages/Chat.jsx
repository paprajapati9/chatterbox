import React, { useEffect, useState } from 'react'
import "./Chat.css"
import { useParams } from 'react-router-dom'
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import { firestore } from '../firebase';

export default function Chat(){
    const {channelId} = useParams();
    const [channelDetails, setChannelDetails] = useState();

    useEffect( () => {
        if(channelId){
            firestore.collection("channels")
            .doc(channelId)
            .onSnapshot((snapshot) => setChannelDetails(snapshot.data()))
        }
    }, [channelId])

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
        </div>
    )
}