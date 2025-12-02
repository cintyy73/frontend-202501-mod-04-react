import React from 'react'
import { useUser } from '../hooks/useUser'

const Login = () => {
const {setUser} = useUser()

  return (
     <button
      onClick={() => setUser({ name: "Priscila", role: "Teacher", apellido:'Rosales' })}
    >
      Loguearme como Admin 
    </button>
  )
}

export default Login
