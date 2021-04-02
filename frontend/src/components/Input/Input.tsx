import React from "react";

import "./Input.css";

 const Input = (props: any) => {
     return(
        <form action="" className="form">
            <input type="text" 
            className="input" 
            placeholder="type a message..."
            value={props.message} 
            onChange={(event) => props.setMessage(event.target.value)}
            onKeyPress={event => event.key === "Enter" ? props.sendMessage(event) : null}
            />
            <button className="sendButton" onClick={(event)=> props.sendMessage(event)}>Send</button>
        </form>
     )
 }

 export default Input;