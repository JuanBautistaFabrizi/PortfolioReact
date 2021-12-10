import React from "react";
import "./proyect.css";
import data from "";

function Proyect() {
    return(
    <div className="proyect">
        <h3 id="h3-proyect">{data.name}</h3>
        <a href={data.url}>
        <img src={data.img} alt="imagen del proyecto" id="img-proyect"/>
        </a>
    </div>
    )
}

export default Proyect();
