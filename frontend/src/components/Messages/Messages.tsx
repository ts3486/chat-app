import React from "react";

import Message from "../Message/Message";

import "./Messages.css";

// import ScrollToBottom from "react-scroll-to-bottom"; 

const Messages = (props: any) => {

    return(
        <div className="Messages">
            {/* <ScrollToBottom> */}
                {props.messages.map((message: any, i: number) => 
                <div key={i}>
                    <Message 
                    message={message} 
                    name={props.name}
                    />
                </div>)}
            {/* </ScrollToBottom> */}
        </div> 
    )

}

export default Messages;