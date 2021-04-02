import React, {useState, useEffect} from "react";
import queryString from "query-string";
import {io} from "socket.io-client";

import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import './Chat.css';


let socket: any;


const ChatComponent = ({location}: any) => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<String[]>([]);
    const ENDPOINT = "https://react-chat-app3486.herokuapp.com/";

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);
    
        setName(String(name));
        setRoom(String(room));

        socket = io(ENDPOINT,  { transports : ['websocket']} ); //what is this transports thing. Error if excluded


        console.log(socket);

        socket.emit("join", {name,room}, ({error}: any) => {
            if(error){
                alert(error);
            }
        });

        return () => {
            socket.emit("disconnect");
            socket.off();
        }

    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on("message", (message: any) => {
            setMessages([...messages, message]);
        })
    }, [messages])

    
    //function for sending message
    const sendMessage = (event: any) => {
        event.preventDefault();

        if(message){
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    }

    console.log(message, messages);

    return(
        <div className="outerContainer">
            <div className="container">

                <InfoBar room={room}/>
                <Messages messages={messages} name={name}></Messages>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
};

export default ChatComponent;