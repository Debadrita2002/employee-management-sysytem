import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const submitHandler = (e)=>{
      e.preventDefault()
      handleLogin(email,password)
      setEmail("")
      setPassword("")
  }
  return (
    <div className='one'>
        <div className='two'>
            <form 
            onSubmit= {(e) => {
               submitHandler(e)
            }}
            className='three'>
                <input 
                value={email}
                 onChange={(e)=>{
                   setEmail(e.target.value)
                 }}
                required className='ff' type="email" placeholder='Enter your email'/>
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required className='ff2' type="password" placeholder='Enter Password'/>
                <button className='ff3'>Log in</button>
            </form>

        </div>
      
    </div>
  )
}

export default Login
