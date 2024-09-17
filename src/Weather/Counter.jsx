import React, { useEffect, useState } from "react";
import css from "./weather.module.css";
 export default function Count(){
    let [counter, setCounter] = useState(1);
    let changeNumber = ()=>{
        setCounter(counter+1);
    }
    let changeNumber1 = ()=>{
        setCounter(counter-1);
    }
    useEffect(()=>{
        // console.log('Hello');
    },[counter])
    return(
        <div className={css.counter}>
            {counter}
            <div className={css.counterBTN}>
            <button onClick={changeNumber}>Increment</button>
            <button onClick={changeNumber1}>Decreament</button>
            </div>
        </div>
    )
 }