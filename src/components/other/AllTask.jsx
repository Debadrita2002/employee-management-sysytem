import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext)
  
  
  return (
    <div ><div className='at2'>
      <h2>Employee Name</h2>
    <h3>New Task</h3>
    <h3>Active Task</h3>
    <h3>Completed Task</h3>
    <h3>Failed Task</h3>
    </div>
      <div className='at1'>
      {userData.map(function(elem,idx){
        return <div key={idx} className='at2'><h2>{elem.firstname}</h2>
        <h3>{elem.taskNumber.newTask}</h3>
        <h5>{elem.taskNumber.active}</h5>
        <h5>{elem.taskNumber.completed}</h5>
        <h5>{elem.taskNumber.failed}</h5>
        </div>
      })}
      </div>
      
      
    </div>
  )
}

export default AllTask
