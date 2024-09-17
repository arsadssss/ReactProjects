import React, { useState } from "react";
import css from "./weather.module.css";
import loading from "./image/loading.gif";
export default function Weather() {
    let [city, setCity] = useState('');
    let [wdetails, setWdetails] = useState();
    let [isloading, setIsloading]= useState(false);
    let getData = (event)=>{
        setIsloading(true);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=416aa9aa577479eb394f38e69ee3e25f&units=metric`)
        .then((res)=>res.json())
        .then((finalRes)=>{
            if(finalRes.cod == "404"){
                setWdetails(undefined);
            }else{
                setWdetails(finalRes);
            }
            console.log(finalRes);
        })
        setIsloading(false);
        event.preventDefault();
        setCity('')
    }
  return (
    <div className={css.container}>
      <div className={css.main}>
        <h1>Weather App</h1>
        <div className={css.inpt}>
          <form onSubmit={getData}>
            <input type="text" value={city} onChange={(event)=>setCity(event.target.value)} />
            <button>Check</button>
          </form>
        </div>
        {wdetails !== undefined 
        ?
        <div className={css.inpt}>
        <h2>{wdetails.name}<span> {wdetails.sys.country}</span>
        </h2>
        <h1>{Math.floor(wdetails.main.temp)}°C</h1>
        <img src={`http://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`} width="45" />
        <h4>{wdetails.weather[0].description}</h4>
        <img src={loading} className={isloading ? 'active' : 'loader'} width={100}/>
      </div> 
      :
      "No Data"
        }
      </div>
    </div>
  );
}
