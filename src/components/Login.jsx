const Login = (props) => {
  const { user, passwordLogin, setUser, setPasswordLogin } =
    props;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("adentro");
        }}
      >
        <div>
          <label>Usuario</label>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Ingrese su usuario"
            type="text"
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
            placeholder="Ingrese su contraseña"
            type="password"
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
