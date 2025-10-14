import { roles } from "../utils/constants"


const Roles = ({rol}) => {
  return (
    <div>
     { <h1>{rol === roles.ADMINISTRADOR && "Administrador"}</h1>}
     { <h1>{rol === roles.USUARIO && "Usuario"}</h1>}
     { <h1>{rol === roles.MANAGER && "Manager"}</h1>}

    </div>
  )
}

export default Roles
