import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id='tasklist' className='swipe'> 
       {data.tasks.map((elem, idx)=>{
         
         return (
          <>
           {elem.active && <AcceptTask key={idx} data={elem} />}
           {elem.newTask && <NewTask key={idx} data={elem} />}
           {elem.completed && <CompleteTask key={idx} data={elem} />}
           {elem.failed && <FailedTask key={idx} data={elem} />}
          </>

         )
       })}
            
     
    </div>
  )
}

export default Tasklist
