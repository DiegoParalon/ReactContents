import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [contador, setContador] = useState(0)

    const handleOnClick = operator => {
        const novoValor = operator === '+'
        ? contador + 1 
        : contador -1
      
        setContador(novoValor)
      
    }






    return (
        <div className='counter'>
            <span>{contador}</span>
            <button onClick={ () => handleOnClick('-')}>-</button>
            <button onClick={ () => handleOnClick('+')}>+</button>
        </div>
     )
}

export default Counter
