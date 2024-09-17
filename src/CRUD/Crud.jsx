import React, { useState } from 'react'

const Crud = () => {
  const [FormData, setFormData]= useState({
    uname : "",
    uemail : "",
    uphone : "",
    upass : "",
    umessage : "",
    index: ""
  });
  const getValue = (e)=>{
    let oldData = {...FormData}
    let inputName = e.target.name;
    let inputValue = e.target.value;
    oldData[inputName]=inputValue;
    setFormData(oldData);
  }
  const [userData, setUserdata] = useState([]);
   const handleSubmit = (e)=>{
     let currentData = {
       uname : FormData.uname,
       uemail : FormData.uemail,
       uphone : FormData.uphone,
       upass : FormData.upass,
       umessage : FormData.umessage,
     }
     if(FormData.index == ''){
      let existingData = userData.filter((v,i)=>v.uemail === FormData.uemail || v.uphone === FormData.uphone)
     if(existingData.length === 1){
      alert("Already Exist");
     }else{
      let finalUserData = [...userData, currentData];
        setUserdata(finalUserData);
        setFormData(
          {
            uname : "",
            uemail : "",
            uphone : "",
            upass : "",
            umessage : "",
            index: ""
          })
          console.log(finalUserData)
        }
     }else{
          let editIndex = FormData.index;
          let oldData = userData;
          let updateExitData = userData.filter((v,i)=> (v.uemail == FormData.uemail || v.uphone == FormData.uphone) && i !== editIndex)
          if(updateExitData.length == 0){
            oldData[editIndex]['uname']= FormData.uname;
            oldData[editIndex]['uemail']= FormData.uemail;
            oldData[editIndex]['uphone']= FormData.uphone;
            oldData[editIndex]['upass']= FormData.upass;
            oldData[editIndex]['umessage']= FormData.umessage;
            setUserdata(oldData);
            setFormData(
              {
                uname : "",
                uemail : "",
                uphone : "",
                upass : "",
                umessage : "",
                index: ""
              }
            )
          }else{
            alert('Already exist');
          }
     }
    e.preventDefault();
   }
   let deleteRaw = (indexNumber)=>{
    let dataAfterdelete = userData.filter((v, i)=> i !== indexNumber);
    setUserdata(dataAfterdelete);
   
   }
   let updateRaw = (indexNumber)=>{
    let updateUserData = userData.filter((v,i)=> i === indexNumber)[0];
    updateUserData['index']= indexNumber;
    console.log(updateUserData);
    setFormData(updateUserData)
   }
  return (
    <div className='w-full h-screen flex justify-center flex-col bg-slate-200 p-6'>
      <h1 className="text-blue-800 font-bold text-[35px] mb-4 transform-upper uppercase">CRUD Operation Form</h1>
      <div className='w-full h-full flex justify-center gap-6 items-start'>
           <div className='w-[25%] h-full flex justify-start items-start'>
            <form onSubmit={handleSubmit} className='w-full h-full flex justify-start flex-col items-start'>
              <input type="text" placeholder='Name' name='uname' value={FormData.uname} onChange={getValue} className='w-full py-3 mt-3 px-3 rounded-md outline-none' required/>
              <input type="email" placeholder='Email' name='uemail' value={FormData.uemail} onChange={getValue}  className='w-full py-3 mt-3 px-3 rounded-md outline-none' required/>
              <input type="text" placeholder='Phone' name='uphone' value={FormData.uphone} onChange={getValue}  className='w-full py-3 mt-3 px-3 rounded-md outline-none' required/>
              <input type="password" placeholder='Password' name='upass' value={FormData.upass} onChange={getValue}  className='w-full py-3 mt-3 px-3 rounded-md outline-none' required/>
              <textarea type="text" placeholder='Message Box' rows={4} name='umessage' value={FormData.umessage} onChange={getValue} className='w-full mt-3 px-3 rounded-md outline-none' required/>
              <button type='submit' className='text-white bg-blue-700 mt-3 py-2 px-4 rounded-md'>Submit</button>
            </form>
           </div>
           <div className='w-[70%] h-full flex justify-evenly items-start'>
            <table className='w-full table-fixed'>
              <thead >
                <tr >
                  <th>
                    Name
                  </th>
                  <th>
                    Email
                  </th>
                  <th>
                    Phone
                  </th>
                  <th>
                    Password
                  </th>
                  <th>
                    Message
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData.map((v,i)=>{
                  return(
                    <tr key={i} className='border-2 border-blue-600'>
                  <td className='border-2 border-blue-600'>
                   {v.uname}
                  </td>
                  <td className='border-2 border-blue-600 overflow-hidden'>
                  {v.uemail}
                  </td>
                  <td className='border-2 border-blue-600'>
                  {v.uphone}
                  </td>
                  <td className='border-2 border-blue-600'>
                  {v.upass}
                  </td>
                  <td className='border-2 border-blue-600'>
                  {v.umessage}
                  </td>
                  <td className='flex justify-center items-center'>
                    <button onClick={()=>updateRaw(i)} className='bg-green-600 text-white py-2 px-3'>Update</button>
                    <button onClick={()=>deleteRaw(i)} className='bg-red-600 text-white py-2 px-3'>Delete</button>
                  </td>
                </tr>
                  )
                })}
              </tbody>
            </table>
           </div>
      </div>
    </div>
  )
}

export default Crud;
