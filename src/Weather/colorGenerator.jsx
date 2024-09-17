import React, { useState } from "react";
import css from "./weather.module.css";
export default function Generate(){
let [colors, setColors]=useState('Random color Generator');

let generateColors = ()=>{
   let randomColor = '#' + Math.random().toString(16).substr(-6);
   setColors(randomColor);
}
    return(
        <div className={css.generator} style={{backgroundColor: colors}}>
            <h1 className={css.head} style={{color: colors}}>Color Code Generator</h1>
            <p>{colors}</p>
            <button onClick={generateColors}>Change</button>
        </div>
    )
}