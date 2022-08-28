import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', 
    justifyContent: 'center', marginTop: '150px'}}>
        <h1>Home</h1>
        <br /><br />
        <ul>
            <li style={{padding: '10px', margin: '10px'}}>
                <Link to='/memo' style={{textDecoration: 'none', color: 'black', 
                fontSize: '2rem', border: '2px solid coral',padding: '10px', 
                margin: '10px'}} >useMemoHook</Link>
            </li>
            <li style={{padding: '10px', margin: '10px'}}>
                <Link to='/call' style={{textDecoration: 'none', color: 'black', 
                fontSize: '2rem', border: '2px solid coral', padding: '10px', 
                margin: '10px'}} >useCallbackHook</Link>
            </li>
            <li style={{padding: '10px', margin: '10px'}}>
                <Link to='/effect' style={{textDecoration: 'none', color: 'black', 
                fontSize: '2rem', border: '2px solid coral', padding: '10px', 
                margin: '10px'}} >useEffectHook</Link>
            </li>
            <li style={{padding: '10px', margin: '10px'}}>
                <Link to='/ref' style={{textDecoration: 'none', color: 'black', 
                fontSize: '2rem', border: '2px solid coral', padding: '10px', 
                margin: '10px'}} >useRefHook</Link>
            </li>
            <li style={{padding: '10px', margin: '10px'}}>
                <Link to='/hoc' style={{textDecoration: 'none', color: 'black', 
                fontSize: '2rem', border: '2px solid coral', padding: '10px', 
                margin: '10px'}} >Higher Order Component</Link>
            </li>
        </ul>
    </div>
  )
}
