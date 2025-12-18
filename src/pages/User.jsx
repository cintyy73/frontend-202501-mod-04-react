import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const data = useParams()
    console.log(data)
  return (
    <div>
      user
    </div>
  )
}

export default User
