import { darkBaseTheme } from "material-ui/styles";
import React from "react";
import { useHistory } from "react-router-dom";
import { firestore } from "../../firebase";

import "./sidepanel-option.css";

export default function SidepanelOption(props) {
    let {Icon, title, id, addChannelOption} = props;

    const history = useHistory()
    const selectChannel = () => {
        if(id) {
            history.push(`/channel/${id}`)
        }else{
            history.push(title)
        }
    }

    const addChannel = () => {
        const channelName = prompt('Please enter channel name');
        if(channelName) {
            firestore.collection("channels").add({
                name : channelName
            })
        }
    }

	return (
		<div 
            className="side-panel-option"
            onClick = {addChannelOption ? addChannel : selectChannel}
        >
			{Icon && <Icon className="side-panel-option__icon"></Icon>}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className = "side-panel-option__channel">
                    <span className = "side-panel-option__hash">&nbsp;#&nbsp; 	&nbsp; {title}</span>
                </h3>
            )}
		</div>
	)
}
