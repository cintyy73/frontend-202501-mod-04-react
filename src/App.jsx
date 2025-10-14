/**
 * 🏠 COMPONENTE PRINCIPAL APP
 * 
 * 📚 PROPÓSITO:
 * - Demuestra las 5 técnicas principales de renderizado condicional en React
 * - Organiza los ejemplos en secciones visuales claras
 * - Sirve como contenedor principal que importa y usa todos los componentes
 * 
 * 🎯 TÉCNICAS DEMOSTRADAS:
 * 1. if/else statement (LoginStatus)
 * 2. return null (Warning) 
 * 3. Operador ternario (LoginButton)
 * 4. Operador && (Notifications)
 * 5. Enums/Switch pattern (FetchStatus)
 */

import LoginStatus from './components/LoginStatus.jsx';
import Warning from './components/Warning.jsx';
import LoginButton from './components/LoginButton.jsx';
import Notifications from './components/Notifications.jsx';
import FetchStatus from './components/FetchStatus.jsx';
import ProductList from './components/ProductList.jsx';
import { Status } from './components/constants.js';

const App = () => {
  const appStyle = {
    padding: "30px", 
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f1f5f9"
  };

  const titleStyle = {
    color: "#1e293b",
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
  };

  const sectionStyle = {
    backgroundColor: "white",
    padding: "25px",
    margin: "20px 0",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e2e8f0"
  };

  const sectionTitleStyle = {
    color: "#334155",
    borderBottom: "3px solid #3b82f6",
    paddingBottom: "10px",
    marginBottom: "20px",
    fontSize: "1.5rem"
  };

  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>🎨 Ejemplos de Renderizado Condicional</h1>

      {/* 1. if / else */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>1. if / else</h2>
        {/* <LoginStatus isLoggedIn={true} /> */}
        <LoginStatus isLoggedIn={false} />
      </section>

      {/* 2. null */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>2. null</h2>
        {/* <Warning show={true} /> */}
        <Warning show={false} />
      </section>

      {/* 3. Operador ternario */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>3. Operador ternario</h2>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <LoginButton isLoggedIn={true} />
          {/* <LoginButton isLoggedIn={false} /> */}
        </div>
      </section>

      {/* 4. Circuito corto con && */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>4. Circuito corto con &&</h2>
        {/* <Notifications count={3} /> */}
        <Notifications count={0} />
      </section>

      {/* 5. Enums */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>5. Enums (múltiples estados)</h2>
        <FetchStatus status={Status.LOADING} />
        <FetchStatus status={Status.SUCCESS} />
        <FetchStatus status={Status.ERROR} />
      </section>

      {/* 6. Renderizado de listas + Composición con children */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>6. Renderizado de Listas + Componente Card</h2>
        <ProductList />
      </section>
    </div>
  );
};

export default App;
