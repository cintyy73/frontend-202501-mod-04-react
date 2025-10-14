import React from 'react'

const Notifications = ({count}) => {
  return (
    <div>
        <h3>Notificaciones</h3>
        {count > 1 && <p>Tienes  {count} mensajes</p>}
        {count === 1 && <p>Tienes  {count} mensaje</p>}
        {count <= 0  && <p>No tienes mensajes</p>}
        {count > 20 && <p>Respondé che!</p>}
       
    </div>
  )
}

export default Notifications
