import  React from "react";
export default function Button({symbol , color , toogle}){
    return(
        <div className="btn-wrapper" onClick={() =>toogle(symbol) } style={{backgroundColor:color}}>
            <h1>{symbol}</h1>
        </div>
    )
}