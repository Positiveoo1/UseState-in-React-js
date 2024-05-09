import React, { useState } from 'react'
import '../Counter.css'

function Counter () {
    let conut =0;
    const [currentState, updatedState] = useState(conut);
    const handle = () => {
            updatedState(currentState + 1)
    }
  return (
    <div className='counter_parent'>
    <div className='main_div'>

        <h3>Counter</h3>
        <button onClick={handle}>{currentState}</button>
    </div>
</div>

  )
}

export default Counter