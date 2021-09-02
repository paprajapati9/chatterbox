import React from "react";
import {firestore} from "../../firebase";

import "./channels.css";

export const createNewChannel = async (channel, channelData) => {
    if(!channel) return;
    // console.log(additionalData, "additional data");
    const fstorechannel = await firestore.collection('channels').add(channel);
    console.log(fstorechannel, "fstorechannel");
    const channelRef = firestore.collection('channels').doc(`${fstorechannel.id}`);
    // console.log(user, "was here");
    const snapshot = await channelRef.get(); 
    if(snapshot.exists){
        console.log("was here also")
        const {name, visibility} = channel;
        try{
            await channelRef.set({
                name,
                visibility,
                ...channelData
            });
        }catch(error){
            console.error("Error creating user document", error);
        }
    }
    // return getUserDocument(user.uid);
}

export default function Channels(props) {
    const createChannel = () => {
        const channel = {
            'name' : 'Channel1',
            'visibility' : 'public'
        }
        createNewChannel(channel, {'users' : props.user.uid});
    }

    const renderPrivateChannels = () => {
        // retrieve a collection.
        firestore.collection('channels').get().then(channels => {
            const documents = channels.docs.map(doc => doc. data())
            // do something with documents.
            documents.forEach(doc => {
                console.log(doc, "doc");
            });

            return (
                <div className="testing"></div>
            );

            
        })
        
        
    }

	return (
		<div className="channels-container">
            <div className="channels-heading">
                <h3 className="sub-title">
                <i className="fas fa-podcast"></i>CHANNELS
                <i className="fas fa-plus" onClick={createChannel}></i></h3>
            </div>
            <div className="private-channels">
                Private
                <div>{renderPrivateChannels()}</div>
            </div>
		</div>
	)
}
