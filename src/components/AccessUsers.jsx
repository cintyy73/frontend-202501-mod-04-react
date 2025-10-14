import { roles } from "../utils/constants"

/**
 * Componente AccessUsers - Muestra diferentes acciones según el rol del usuario
 * 
 * Props:
 * - rol: string - El rol del usuario ("admin", "manager", "user")
 * 
 * Comportamiento:
 * - Si es ADMINISTRADOR: muestra "Crear usuarios"
 * - Si es MANAGER: muestra "Ver usuarios"  
 * - Si es USUARIO: no muestra nada (botón vacío)
 */
const AccessUsers = ({rol}) => {
  return (
    <button>
      {/* Renderizado condicional basado en rol - Solo admins pueden crear usuarios */}
      {rol === roles.ADMINISTRADOR && "Crear usuarios"}
      
      {/* Solo managers pueden ver usuarios */}
      {rol === roles.MANAGER && "Ver usuarios"}
    </button>
  )
}

export default AccessUsers
