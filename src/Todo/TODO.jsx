import React, { useState } from 'react'
import cs from "./todo.module.css"
const TODO = () => {
    let [formData, setFormData]=useState({
        itemName : '',
        index: ''
    });
    let getValue = (event)=>{
        let oldData = {...formData}
        let inputName = event.target.name;
        let inputValue = event.target.value;
        oldData[inputName]=inputValue;
        setFormData(oldData);
    }
    let [userData, setUserData]= useState([]);
    let addData = ()=>{
        let currentData = {
            itemName: formData.itemName,
        }
       let  newData = [...userData, currentData]
       setUserData(newData);
       setFormData({
        itemName : '',
        index: ''
    })
    //    console.log(currentData);
    }
    let deleteData = (indexNumber)=>{
        let deletedData = userData.filter((v,i)=> i !== indexNumber);
        setUserData(deletedData);
    }
  return (
    <div className='w-full h-screen bg-blue-700 p-8 flex justify-start flex-col items-center'>
        <div className='w-full h-auto flex justify-center items-start'>
                <div className="bg-white border w-[350px] border-slate-200 rounded-xl p-2 text-sm">
                    <h1 className="text-center text-blue-700 text-xl font-bold col-span-6">ADD TO LIST</h1>
                    <div className='w-full h-auto flex justify-center items-center flex-col'>
                        <textarea placeholder="Your feedback..." name='itemName' value={formData.itemName} onChange={getValue} className="bg-slate-100 w-full mt-3 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"></textarea>
                        <div className='w-full flex justify-end items-center mt-3'>
                            <button onClick={addData} className="bg-slate-100 stroke-slate-600 border border-slate-200 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400">
                                <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"></path>
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10.11 13.6501L13.69 10.0601"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        <div className='flex w-full justify-center items-center flex-wrap gap-3'>
            {userData.length >= 1 ? 
            userData.map((v,i)=>{
                return(
                    <div key={i} className={cs.card}>
                        <a className={cs.card1}>
                            <span className='text-blue-700 font-bold text-lg absolute top-1 left-2'>{i+1}</span>
                            <p className={cs.small}>{v.itemName}</p>
                            <div className={cs.gCorners} href="#">
                                <button onClick={()=>deleteData(i)} className='text-white bg-red-500 px-2 pb-1 pt-2 absolute bottom-0 right-0 rounded-ss-full text-[8px]'>&#9587;</button>
                            </div>
                        </a>
                    </div>
                )
            })
        :
        <div className={cs.card}>
            <a className={cs.card1}>
                <p className={cs.small}>No Data Added</p>
            </a>
        </div>
        }
        </div>
    </div>
  )
}

export default TODO;
