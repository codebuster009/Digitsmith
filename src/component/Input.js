import React from "react";
export default function Input(props) {
    return(
        <>
       <div className="result">
        <h1>{props.result}</h1>
       </div>
       <div className="input">
        <h3>{props.input}</h3>
       </div>
       </>
    )
}