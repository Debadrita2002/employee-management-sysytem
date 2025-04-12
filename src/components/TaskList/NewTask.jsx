import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='swipe2' id='newtask'>
            <div className='swipe3'>
            <h3 className='col1'>{data.category}</h3>
            <h4 className='col2'>{data.taskDate}</h4>
            </div>
            <h2 className='lekha'>{data.title}</h2>
            <p className='para'>{data.description}</p>
            <div className='accept'>
                <button className='ab11'>Accept Task</button>
            </div>
        
        </div>
  )
}

export default NewTask
