import React from "react";

import "./InfoBar.css";

const InfoBar = (props: any) => {

    return(
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src="" alt="" className="onlineIcon"/>
                <h3>{props.room}</h3>
            </div>
            <div className="rightInnerContainer">
                {/* <a href="/"><img src="" alt="close image"/></a> */}
            </div>
        </div> 
    )

}

export default InfoBar;