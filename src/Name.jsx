import React from 'react'
import HOC from './higherOrderComponent'

 function Name({name, setName}) {
  return (
    <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', 
    justifyContent: 'center', marginTop: '150px'}}>
        <input 
              type="text" 
              value={name} 
              onChange={(e)=>setName(e.target.value)}
              style={{fontSize: '1.3rem'}}
         />
        <h1>{name}</h1>
    </div>
  )
}
export default HOC(Name);
