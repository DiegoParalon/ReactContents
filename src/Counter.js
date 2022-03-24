import React, { useState, useEffect } from 'react'
import './Counter.css'
// UseState = Modifica os estados dos elementos

const Counter = () => {
    const [contador, setContador] = useState(0)
    const [teste, setTeste] = useState('teste')
    

    useEffect(() => {
        console.log('ok alterou o estado de teste ')
    }, [teste])

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
            <button onClick={ () => setTeste('Outro Valor')}>{teste}</button>
        </div>
     )
}

export default Counter
