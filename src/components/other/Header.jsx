import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  /*const [username, setUsername] = useState('')
  if(!data){
    setUsername('Admin')
  }
  else{
    setUsername(data.firstname)
  }*/

    const logOutUser = ()=>{
      localStorage.setItem('loggedInUser','')
      props.changeUser('')
     // window.location.reload()
    }
 
  return (
    <div className='h1'>
      <h1 className='t1'> Hello <br/><span className='s1'>{props.data.firstname}</span>👋</h1>
      <button onClick={logOutUser} className='b1'>Log Out</button>
    </div>
  )
}
export default Header
