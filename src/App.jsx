import { useState } from "react";
import './app.css'
import CosteHotel from "./components/CosteHotel";
import CosteAlquiler from "./components/CosteAlquiler";
import ButtonModule from "./buttons/ButtonModule";
import Icon from "./Icon";
import IconExample from "./Icon";

import dog from './assets/dog.png'

function App() {

  const [night, setNight] = useState(0)
  
  const handleNight = (e) =>{
    setNight(e.target.value)
    console.log(night)
  }

  return (
    <div>
      <img src="https://img.freepik.com/foto-gratis/setter-irlandes_1398-4793.jpg?semt=ais_hybrid&w=740&q=80" alt="dog" />

      {/* <img src="src/assets/dog.png"/>  */}
      <img src={dog}/>
        <h1 className="prueba">Calculadora de costo de viaje</h1>
      <div>
        <label htmlFor="night">Cantidad de night</label>
        <input
        value={night} 
        onChange={handleNight}
        placeholder="Introduce la cantidad de night"/>
      </div>
      <CosteHotel night={night}/>
      <CosteAlquiler night={night} />
      <ButtonModule/>
      <IconExample/>
    </div>
  
  );
}

export default App;
