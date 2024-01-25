import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function GeneratPass() {

  const [length, setLength] = useState(8)
  const [password, setPassword]   =  useState('')
  const [number , setNumber] = useState(false)
  const [special , setSpecial] = useState(false)

  
  const ref = useRef(null)

  useEffect(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (number)   str += '0123456789'
    if (special)  str += '!@#$%^&*'

 

  for(let i = 1; i <= length; i++ ){
    let random = Math.floor(Math.random() * str.length) 
    pass += str.charAt(random)
  }

  setPassword(pass)

  },[length , number , special])
  
  const copyText = useCallback( () => {
    // ref.current.select();
    // ref.current.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>

   <div className=' w-full max-w-md mx-auto px-4 py-3 my-60 shadow-lg rounded-lg bg-gray-800 text-orange-700'>

        <h1 className='text-white my-1 text-center'> Password Generator </h1>

        <div className='flex rounded-lg shadow mb-4 overflow-hidden justify-center my-2 w-auto'>
        <input type="text" readOnly value={password}  className='pb-1 ps-2 outline-none w-full' ref = {ref}/>
        <button className='text-white bg-blue-800 font-bold px-3 ' onClick = {copyText}> Copy </button>
        </div>

  

        <div className='flex text-sm gap-x-2 justify-center'>

            <div className='flex items-center gap-x-3'>

                <input type="range" min={6} max={100} value = {length} className='cursor-pointer' onChange={ (e) => setLength(e.target.value)} ref = {ref}/>
                <label>Length: </label>

            <div className="flex items-center gap-x-1">
                <input type="checkbox" id="numberInput" name='pass' onChange={() => setNumber((prev) => !prev)}/>
                <label htmlFor="numberInput" value = {number}>Numbers</label>
            </div>

                <input type="checkbox" id="characterInput" name='pass'  onChange={() => setSpecial((prev) => !prev)}/>
                <label htmlFor="characterInput">Characters</label>

        </div>
        </div>


    </div>
    
    </>
  )
}
