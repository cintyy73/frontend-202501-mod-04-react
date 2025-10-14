
const Button = ({isLoggedIn}) => {
  return (
    <button>
      {isLoggedIn ?  "Cerrar sesión" : "iniciar Sesión"  }
    </button>
  )
}

export default Button
