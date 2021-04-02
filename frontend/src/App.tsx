import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Join from "./components/Join/JoinComponent";
import Chat from "./components/Chat/ChatComponent";

// import "./Join.css";

class App extends Component<any>{

    render(){
 
        return(
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Join} />
                        <Route path="/chat" exact component={Chat} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
};

export default App; 