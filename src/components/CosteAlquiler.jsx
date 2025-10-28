const title = {
  color: "green",
};
const coste = 40;
const desc1 = 20 
const desc2 = 50 

const CosteAlquiler = ({ night }) => {
  let costeTotal = night * coste;
  let desc = ''
let color = 'pink'
  if (night >= 3 && night < 7) {
    costeTotal -= desc1;
    color = 'purple'
   desc = 'descuento1'
  }  else if (night >= 7 ){
    costeTotal -= desc2;
    color = 'orange'
   desc = 'descuento2'
  }

  return (
    <div>
      <p>Coste Alquiler de coche</p>
      <p style={title}> El coste de alquiler de coche por {night} noches es </p>
      <span style={{ color: color }}>{costeTotal}</span>
     {desc === 'descuento1' && <p>Su descuento en el auto es de 20</p>}
     {desc === 'descuento2' && <p>Su descuento en el auto es de 50</p>}

    </div>
  );
};

export default CosteAlquiler;
