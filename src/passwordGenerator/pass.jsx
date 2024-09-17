import React, { useState } from "react";
import style from "./pass.module.css";
import { LC, NC, UC, SC } from "./data";
import { toast } from "react-toastify";
export default function Pass() {
    let [uppercase, setUppercase]= useState(false);
    let [lowercase, setLowercase]= useState(false);
    let [number, setNumber]= useState(false);
    let [symbols, setSymbols]= useState(false);
    let [passwrodlen, setPasswordlen] = useState(8);
    let [showPass, setShowPass] = useState('');

    let createPassword = (event)=>{
        let finalData="";
        let charSet ="";
        if(uppercase || lowercase || number || symbols){
            if(uppercase) charSet += UC;
            if(lowercase) charSet += LC;
            if(number) charSet += NC;
            if(symbols) charSet += SC;
            for(let i=0; i<passwrodlen; i++){
                finalData += charSet.charAt( Math.floor(Math.random()*charSet.length));
            }
            setShowPass(finalData);
            console.log(charSet);
            console.log(finalData);
        }else{
            toast.warn("Please select atleast one input");
        }
        event.preventDefault();
    }
    let copyPass = (event)=>{
        navigator.clipboard.writeText(showPass);
        event.preventDefault();
    }
  return (
    <div className={style.container}>
      <div className={style.main}>
        <h1>Password Generator</h1>
        <form action="">
          <div className={style.inpt}>
            <input type="text" value={showPass} readOnly/>
            <button onClick={copyPass}>Copy</button>
          </div>
          <div className={style.options}>
            <div className={style.pass}>
              <label htmlFor="pass">Password Length</label>
              <input type="number" max='16' min='8' value={passwrodlen} onChange={(event)=>setPasswordlen(event.target.value)} name="pass" id="pass" />
            </div>
            <div className={style.opt}>
              <label htmlFor="UC">Include uppercase letters</label>
              <input type="checkbox" name="UC" checked={uppercase} onChange={()=>setUppercase(!uppercase)} id="UC" />
            </div>
            <div className={style.opt}>
              <label htmlFor="LC">Include lowercase letters</label>
              <input type="checkbox" name="LC" checked={lowercase} onChange={()=>setLowercase(!lowercase)} id="LC" />
            </div>
            <div className={style.opt}>
              <label htmlFor="Nn">Include numbers</label>
              <input type="checkbox" name="Nn" checked={number} onChange={()=>setNumber(!number)} id="Nn" />
            </div>
            <div className={style.opt}>
              <label htmlFor="Ss">Include symbols</label>
              <input type="checkbox" name="Ss" checked={symbols} onChange={()=>setSymbols(!symbols)} id="Ss" />
            </div>
            <button onClick={createPassword}>Generate Password</button>
            {/* <ToastContainer /> */}
          </div>
        </form>
      </div>
    </div>
  );
}
