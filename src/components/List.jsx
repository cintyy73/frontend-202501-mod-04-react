import { useState } from "react";
import Card from "./Card";

const List = ({ title, users }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [userStates, setUsersStates] = useState( users.map(user => ({ ...user })))

  const filteredUsers = filterActive? userStates.filter((user) => user.isActive): userStates;

  const toggleUserActive = (id) => {
    setUsersStates((prev) => prev.map((user)=>user.id === id ? {...user, isActive:!user.isActive } : user))
  }

  return (
    <div style={styles.section}>
      <h2>{title}</h2>
      <button
        onClick={() =>{ setFilterActive(!filterActive)}}
        style={styles.button}
      >
        {filterActive ? "Mostrar todos" : "Mostrar usuarios Activos"}
      </button>
      <div style={styles.container}>
        {filteredUsers.map((user) => (
          <Card key={user.id} user={user}  toggleActive={() => toggleUserActive(user.id)} />
        ))}
      </div>
    </div>
  );
};
export default List;

const styles = {
  section: { marginTop: "20px" },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
    marginTop: "10px",
  },
  button: {
    marginBottom: "10px",
    padding: "8px 12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
