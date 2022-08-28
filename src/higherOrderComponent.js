import React, {useState} from 'react'

const HOC = function(OriginalComponent) {
    return function NewComponent() {
        const [name, setName] = useState('');
        return (
          <OriginalComponent name={name} setName={setName} />
        )
      }
}
export default HOC;
 
