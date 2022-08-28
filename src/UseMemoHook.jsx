import React from 'react'
import { useMemo, useState } from "react";


export default function UseMemoHook() {
    const [text, setText] = useState('')
    function expensiveTask(){
      let total = 0; 
      for(let i=0;i<1000000000;i++){
        total+=i;
      }
      return total;
    }
    let expensiveCount = useMemo(()=>expensiveTask(),[])
    // let expensiveCount = expensiveTask();
    return (
      <div className="App" style={{display: 'flex',flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'center', marginTop: '150px'}}>
        <input type="text" style={{ fontSize: '4rem', padding: '5px'}} value={text} onChange={(e)=>setText(e.target.value)} />
        <h1>Total = {expensiveCount}</h1>
      </div>
    );
}
