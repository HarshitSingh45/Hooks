import React, { useCallback, useState } from 'react'
import CallbackChild from './CallbackChild';

export default function UseCallback() {
    console.log('Parent re-rendered')
    const [bool, setBool] = useState(false);
    const [name, setName] = useState('Harshit');
    const changeName = useCallback((e)=>{
        setName(e.target.value);
    },[name])
    console.log(bool);
  return (
    <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', 
    justifyContent: 'center', marginTop: '150px'}}>
        <h1>Status - {bool} </h1>
        <button onClick={()=> setBool(!bool)}>True/False</button><br />
        <input type="text" value={name} onChange={changeName}/>
        <CallbackChild name={name} changeName={changeName} />
    </div>
  )
}
