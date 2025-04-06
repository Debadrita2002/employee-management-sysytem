import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='swipe2' id='completetask'>
            <div className='swipe3'>
            <h3 className='col1'>{data.category}</h3>
            <h4 className='col2'>{data.taskDate}</h4>
            </div>
            <h2 className='lekha'>{data.title}</h2>
            <p className='para'>{data.description}</p>
            <div className='complete'>
            <button className='ab11'>Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask
