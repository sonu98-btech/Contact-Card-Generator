import React, { useState } from 'react'

const Form = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [gender, setgender] = useState("")
    const [user, setuser] = useState([])
    const submit = (e) => {
        e.preventDefault()
        const alluser = [...user]
        alluser.push({ name, email, phone, gender })
        setuser(alluser)
        setname("")
        setemail("")
        setphone("")
        setgender("")
    }

  return (
    <div className='bg-[url("https://imgs.search.brave.com/zNlUx6ZABBiqJ24MvZrFfY541kkGSwUaG6CV_yczT7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/ODA1OTA2My9waG90/by93b3JsZC1lbnZp/cm9ubWVudC1kYXkt/Y29uY2VwdC1ncmVl/bi1ncmFzcy1hbmQt/Ymx1ZS1za3ktYWJz/dHJhY3QtYmFja2dy/b3VuZC13aXRoLWJv/a2VoLndlYnA_YT0x/JmI9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz04YXBRNnVhako5/ZF9uMHV2dHpMb3Zh/RjNpZXFxcW1kRFU5/dlRRQXlXUFZjPQ")]
      bg-no-repeat bg-cover h-screen bg-center'>
      <h1 className='text-center  p-3 text-3xl font-bold'>Enter Contact Details</h1>
      <form  onSubmit={submit} className='flex flex-col items-center justify-between gap-3 '>
          <input onChange={(e)=>setname(e.target.value)}className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" required placeholder='Enter Name' value={name} />
          <input onChange={(e)=>setemail(e.target.value)} className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" required placeholder='Enter email' value={email} />
          <input onChange={(e)=>setphone(e.target.value)} className='border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'  type="text" pattern="[0-9]*" inputMode="numeric"  placeholder='Enter phone No.' value={phone} />
             <div className='flex gap-3'><span><input onChange={(e)=>setgender(e.target.value)} id='gender-male' type="radio" name='gender' value='Male' checked={gender === 'Male'} />
            <label htmlFor='gender-male'>Male</label></span>
            <span><input onChange={(e)=>setgender(e.target.value)} id='gender-female' type="radio" name='gender' value='Female' checked={gender === 'Female'} />
             <label htmlFor='gender-female'>Female</label></span></div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
        </form>
        <div className='flex items-center justify-center'>
          {user.map((elem, idx) => (
            <div key={idx} className='m-6 flex flex-col text-black w-1/7 text-center font-bold h-[230px] bg-[url(https://imgs.search.brave.com/arc4Zce6FS5GqHj_dA02vn-RLL0bhXoiG4yIE4se9rk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/OTk5NTI1Ni92ZWN0/b3IvZ3JlZW4tc3By/aW5nLW5hdHVyZS1i/YWNrZ3JvdW5kLXdp/dGgtbGVhdmVzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0t/ZnJzQnBHc19hMEFB/R01nckswRHdWdFVy/QTcydzNWcEROQ0NT/aHlGMV80PQ)] bg-no-repeat bg-cover bg-center gap-2 rounded-2xl p-4' >
              <h1 className='text-2xl text-center font-bold'>{idx + 1}. Contact Details:</h1>
              <p >Name : {elem.name}</p>
              <p>Email : {elem.email}</p>
              <p>Phone No. : {elem.phone}</p>
              <p>Gender : {elem.gender}</p>
            </div>
          ))}
        </div>
    </div>

  )
}

export default Form