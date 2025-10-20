import List from './components/List';
import {users , suma } from './utils/data'

function App() {
console.log(suma(5,6))
const activeUsers = users.filter(user=>user.isActive)
console.log(activeUsers)
  return (
    <div style={styles.wrapper}>
      <h1>Gestión de Usuarios</h1>
   
      <List title='Todos los usuarios' users={users} />
      <hr/>
      <List title='Usuarios activos' users={activeUsers} />

    </div>
  );
}
const styles = {
  wrapper: {
    padding: "20px",
    textAlign: "center",
  },
  filterBtn: {
    background: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "10px",
  },
};
export default App;
