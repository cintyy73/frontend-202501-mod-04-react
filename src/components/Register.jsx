const Register = (props) => {
  const {
    userName,
    password,
    confirmPassword,
    setUserName,
    setPassword,
    setConfirmPassword,
  } = props;

  const onRegister = (e) => {
    e.preventDefault();
    console.log({
      name: userName,
      password: password,
      confirmPassword: confirmPassword,
    });
  };
  return (
    <form onSubmit={onRegister}>
      <div>
        <label>Usuario</label>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Ingrese su usuario"
          type="text"
        />
      </div>
      <div>
        <label>Contraseña</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingrese su contraseña"
          type="password"
        />
      </div>
      <div>
        <label>Confirmar contraseña</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirme su contraseña"
          type="password"
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
