import AccessUsers from "./components/AccessUsers";
import Button from "./components/Button";
import Bye from "./components/Bye";
import Hello from "./components/Hello";
import LoginStatus from "./components/Loginstatus";
import Notifications from "./components/Notifications";
import Roles from "./components/Roles";
import Warning from "./components/Warning";
import { roles } from "./utils/constants";

// Simulación de datos de usuario para ejemplos de renderizado condicional
const user = {
  name: "Melanie",
  isLoggedIn: false, // Cambia a true para ver componente Hello
  rol: "admin"       // Prueba con: "admin", "user", "manager"
  // rol:"user"
  // rol:"manager"
};

// Simulación de estado de carga de datos
const data = true; // Cambia a false para ver mensaje "cargando"


function App() {
  return (
    <>
      {/* EJEMPLO 1: Renderizado condicional con operador ternario para loading */}
      {!data ? (
          <p>cargando</p>
        ) : (
        <div>
          {/* EJEMPLO 2: Componente que muestra estado de login del usuario */}
          <LoginStatus name={user.name} isLoggedIn={user.isLoggedIn} />
          
          {/* EJEMPLO 3: Componente condicional simple (Warning no se muestra porque show=false) */}
          <Warning show={false} />
          
          {/* EJEMPLO 4: Operador ternario comentado - ejemplo alternativo */}
          {/* {user.isLoggedIn ? <Hello /> : <Bye />} */}
          
          {/* EJEMPLO 5: Renderizado condicional con && (AND lógico) */}
          {user.isLoggedIn && <Hello /> }     {/* Solo se muestra si está logueado */}
          {!user.isLoggedIn && <Bye /> }      {/* Solo se muestra si NO está logueado */}

          {/* EJEMPLO 6: Botón que cambia según el estado de login */}
          <Button isLoggedIn={user.isLoggedIn} />
          
          {/* EJEMPLO 7: Componente que muestra notificaciones con count */}
          <Notifications count={1} />
          
          {/* EJEMPLO 8: Componente que muestra rol del usuario */}
          <Roles rol={user.rol} />
          
          {/* EJEMPLO 9: AccessUsers - Condición OR con múltiples roles permitidos */}
          {/* Aparece si el usuario es ADMINISTRADOR O MANAGER */}
          {((user.rol === roles.ADMINISTRADOR) || (user.rol === roles.MANAGER)) && <AccessUsers rol={user.rol}/>}
          
          {/* EJEMPLO 10: AccessUsers - Condición NOT (negación) */}
          {/* Aparece si el usuario NO es USUARIO regular (es decir, admin o manager) */}
          {user.rol !== roles.USUARIO && <AccessUsers rol={user.rol}/> }
        </div>

      )}
    </>
  );
}

export default App;
