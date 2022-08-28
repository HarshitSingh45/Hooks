import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [width, setWidth] = useState(window.innerWidth);
    function size(){
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        console.log('I am the effect')
        window.addEventListener('resize', size);
        return (()=>{
            console.log('clean-up function - I run after re-render, but before the next useEffect');
            window.removeEventListener('resize',size);
        })
    })
    console.log('I am just part of render');
  return (
    <h1 style={{display: 'flex', alignItems: 'center', 
    justifyContent: 'center', marginTop: '300px'}}>Screen Width - {width}</h1>
  )
}
