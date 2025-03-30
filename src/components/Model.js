import React, { Children } from 'react'

const Model = ({ show, onClose, children }) => {
    if(!show) return null;
  return (
    <div>
        <div className='model-overlay' style={{border: '1px solid black'}}>
            <div className='model-content'>
                <button style={{padding: '10px', margin: '10px', 
                backgroundColor:"red", borderRadius: '5px'}} 
                className="model-close" onClick={onClose} >Close</button>
                <p className='model-p'>{children}</p>
            </div>
        </div>
    </div>
  )
}

export default Model;