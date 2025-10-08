const Greeting = (props) => {

  const {name: nombre= "nn", data, age = 0} = props
  console.log(data.date)
  return (
    <>
      <p>Lunes {data.date}</p>
      <p>edad: {age}</p>
      {/* <p>Egresada: {age}</p> */}

      <h1>{nombre} Bienvenida A NUESTRA WEB!!!</h1>
    </>
  );
};

export default Greeting;

