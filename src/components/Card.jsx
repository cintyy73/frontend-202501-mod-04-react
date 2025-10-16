const Card = ({user, toggleActive}) => {
    const {name, email, country, role, isActive} = user
  return (
    <div>
       <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>País:</strong> {country}</p>
      <p><strong>Rol:</strong> {role}</p>
      <p><strong>Estado:</strong>{isActive ? "Activo" : "Baja" }</p>
         <button  onClick={toggleActive}>
        Cambiar Estado
      </button>
    </div>
  )
}

export default Card
