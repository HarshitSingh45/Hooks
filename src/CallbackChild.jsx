import React, {memo} from 'react';

function CallbackChild({name}) {
    console.log('Child Rerendered')
  return (
    <div>
        <h1>Name - {name}</h1>
    </div>
  )
};

export default memo(CallbackChild);
