import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [allowNumber, setNumber] = useState(false)
  const [allowChar, setChar] = useState(false)
  const [password, setPassword] = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefzhijklmnopqrstuvwxyz"

    if (allowNumber) str += "0123456789"
    if (allowNumber) str += "!@#$%^&*()"

    for (let i = 0; i < length.length; i++) {
      let char = Math.floor(Math.random * str)
      pass = str.charAt(char)
    }
    setPassword(pass);
    
  }, [length, allowChar, allowNumber, setPassword]
  )
  return (
    <>
      <h1 className="text-white items-start h-screen text-center text-4xl mt-10 text-white-600 font-bold ">Password Generator</h1>
      <div>
        <input
          type="text"
          value={pG}
          className="outline-none w-full py-1 px-3 "
          placeholder='padu'
          readOnly
        />
      </div>
    </>
  )
}

export default App
