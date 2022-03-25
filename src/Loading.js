import React from 'react'

const Loading = ({ visible }) => {
    return (
        <div>
            { visible ? 'Carregando...' : ' '} 
        </div>
    )
}

export default Loading