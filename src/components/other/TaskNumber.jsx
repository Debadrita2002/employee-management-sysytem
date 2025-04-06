import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='task1'>
        <div className='task2'>
            <h2 className='th1'>{data.taskNumber.newTask}</h2>
            <h3 className='th2'> New Task</h3>
        </div>

        <div className='task3'>
            <h2 className='th1'>{data.taskNumber.completed}</h2>
            <h3 className='th2'> Completed Task</h3>
        </div>

        <div className='task4'>
            <h2 className='th1'>{data.taskNumber.active}</h2>
            <h3 className='th2'> Accepted Task</h3>
        </div>

        <div className='task5'>
            <h2 className='th1'>{data.taskNumber.failed}</h2>
            <h3 className='th2'> failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskNumber
