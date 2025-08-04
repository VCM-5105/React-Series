//This project uses the memoization technique and in this project optimal approach is used to generate password
//useCllback is a react hook that allow you cache a function definition re render
//useState for - definition or declaration

import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length,setlength]=useState(5);
  const [numbers,setnumbers]=useState(false);
  const [character,setcharacter]=useState(false);
  const [password,setpassword]=useState("");

  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers){
      str+="0123456789"
    }
    if(character){
      str+="!@#$%&*<>"
    }
    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }

    setpassword(pass);

  },[length,numbers,character,setpassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numbers,character,setpassword])

  const copytoclipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='w-full px-4 py-3 bg-gray-800 text-orange-500 rounded-xl shadow-md max-w-md mx-auto my-8'>
      <h1 className='text-white text-center my-2 text-2xl'>Password Generator</h1>

      <div className='flex overflow-hidden px=3 py=1 mb-4 shadow '>
        <input type="text"
        value={password}
        placeholder='Password'
        readOnly 
        ref={passwordRef}
        className='outline-none w-full py-1 px-3 bg-gray-100 rounded-lg'/>
        <button
        onClick={copytoclipboard}
        className='bg-blue-600 text-white rounded-lg  shrink-0 outline-none px-1.5 py-0.5 hover:bg-blue-200'>Click Me</button>
      </div>

      <div className='flex gap-x-2 text-sm'>

       <div className='flex items-centre gap-x-1'>
        <input type="range"
        min={5}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>setlength(e.target.value)}
         />
        <label >Length:{length}</label>
       </div>

       <div className='flex gap-x-1 items-center'>
        <input type="checkbox" 
        defaultChecked={numbers}
        id="numberInput"
        onChange={()=>{setnumbers((prev)=>!prev)}}/>
        <label htmlFor="NumberInput">Numbers{numbers}</label>
       </div>

       <div className='flex gap-x-1 items-center'>
        <input type="checkbox"
        defaultChecked={character}
        id="characterInput"
        onChange={()=>{setcharacter((prev)=>!prev)}} />
        <label htmlFor="">CharAllowed:{character}</label>
       </div>
      
      </div>
    </div>
  )
}

export default App
