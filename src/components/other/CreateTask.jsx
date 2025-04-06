import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
  
    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };
  
    const data = userData;
  
    data.forEach(function(elem){
      if(assignTo === elem.firstname){
        elem.tasks.push(task);
        elem.taskNumber.newTask = elem.taskNumber.newTask + 1;
      }
    });
  
    setUserData(data);
    console.log(data);
  
    // Reset form
    setAssignTo('');
    setCategory('');
    setTaskDate('');
    setTaskTitle('');
    setTaskDescription('');
  };
  return (
    <div className='ct' >
      <div className='a2'> 
        <form className='a3' onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className='a31'> 
            <div className='a4'><h3 className='ah'>Task Title</h3>
            <input 
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
            className='ai'  type='text' placeholder='dtyh'/></div>
            <div className='a6'><h3 className='ah'>Date</h3>
            <input value={taskDate}
            onChange={(e)=>{
              setTaskDate(e.target.value)
            }}
             className='ai' type='date'/></div>
            <div className='a7'><h3 className='ah'>Assign To</h3>
            <input 
            value={assignTo}
            onChange={(e)=>{
              setAssignTo(e.target.value)
            }}
            className='ai' type="text" placeholder='employee name' />
            </div> 
            <div className='a8'><h3 className='ah'>Category</h3>
            <input 
            value={category}
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
            className='ai' type="text" placeholder='design,dev,etc' />
            </div>
          </div>
            
            <div className='a5'><h3 className='ah'>Description</h3>
            <textarea 
            value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value)
            }}
            className='ai2' name='' id='' cols={30} rows={10}> </textarea>
            <button className='ab'> create Task</button></div>
           
            
        </form>
      </div>
    </div>
  )
}

export default CreateTask
