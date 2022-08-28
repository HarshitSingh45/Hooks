import React, { useEffect, useRef, useState } from 'react'

export default function UseRefHook() {
    const [text, setText] = useState('')
    const count = useRef(0);
    count.current += 1;
    const prevState = useRef('');
    // let count = 0;
    // count += 1;
    useEffect(()=>{
        prevState.current = text;
    })
  return (
    <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', 
    justifyContent: 'center', marginTop: '150px'}}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <h1>Render Count: {count.current}</h1>
        <h2>Previous state: {prevState.current}</h2>
        {/* <h1>Render Count: {count}</h1> */}
    </div>
  )
}
