import React, { useState, useEffect } from 'react'
import Template from './Template'
import Loading from './Loading'




const Users = () => {
const [isLoading, setIsLoading] = useState(false)
const [users, setUsers] = useState([])

useEffect(() => {
  setIsLoading(true)

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    setUsers(data)
    setIsLoading(false)
  })

}, [])

return (
  <Template title="Usuarios">
  
  
  <Loading visible={isLoading} />

  {
    users.map(user => {
      return (
        <div style={{margin:'20px'}}>
          <span><b>Nome:</b>{user.name} - id:   {user.id}</span> <br></br>
          <span><b>Nome do usuario:</b>{user.username} - id: {user.id}</span> <br></br>
          <span><b>Email:</b>{user.email} - id: {user.id}</span> <br></br>
          <span><b>Endereço:</b>{user.adress} - id: {user.id}</span> <br></br>
        </div>
      )
    })
  }
  </Template>
)


}

export default Users


