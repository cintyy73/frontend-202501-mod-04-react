import React from 'react'
import { useUser } from '../hooks/useUser'

const Profile = () => {
const {user}= useUser()

  return (
    <h2>Bienvenida, {user.name} {user.apellido} ({user.role})</h2>
  )
}

export default Profile
