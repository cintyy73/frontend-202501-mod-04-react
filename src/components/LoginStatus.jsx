const LoginStatus = ( { name, isLoggedIn }) => {
// const { name, isLoggedIn } = props


  if (isLoggedIn) {
    return <div >Bienvenid@ {name} </div>;
  }
  return <p>Por favor inicia sesión</p>;
};

export default LoginStatus;
