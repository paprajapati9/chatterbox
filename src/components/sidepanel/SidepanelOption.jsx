import React from "react";

import "./sidepanel-option.css";

export default function SidepanelOption(props) {
    let {Icon, title} = props;
	return (
		<div className="side-panel-option">
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
