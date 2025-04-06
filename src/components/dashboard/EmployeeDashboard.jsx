import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='e1'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskNumber data={props.data}/>
      <Tasklist data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
