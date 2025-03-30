import React from 'react'

const Model = ({ displayModel }) => {
  return (
    <div>
        <div className='model-overlay'>
            <button style={{padding: '10px', margin: '10px', backgroundColor:"red", borderRadius: '5px'}} className='model-close'>Close</button>
            <p className='model-p'>This is the content of the model.</p>
        </div>
    </div>
  )
}

export default Model;