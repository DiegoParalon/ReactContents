import React from "react"
import Header from './Header'
const Template = ({children, title }) => {
    return (
        <>
            <Header title={title} />
            {children}
        
        </>
    )
}

export default Template