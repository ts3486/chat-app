import React from "react";

import "./Message.css";

const Message = (props: any) => {
    let isSentByCurrentUser = false;

    const trimmedName = props.name.trim();

    console.log(props.message.user, trimmedName);

    if(props.message.user === trimmedName){
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                <div className="messageBox backgroundLight">
                    <div className="messageText colorDark">{props.message.text}</div>
                </div>
                <p className="sentText pl-10">{trimmedName}</p> 
            </div>
        ) 
        :
        (
            <div className="messageContainer justifyStart">
                <p className="sentText pr-10">{props.message.user}</p>
                <div className="messageBox backgroundBlue">
                    <div className="messageText colorWhite">{props.message.text}</div>
                </div>
            </div>
        )
        
    )

}

export default Message;