import { useUsers } from "../hooks/useUsers";
const UsersList = () => {
  const { users, loading } = useUsers();

  return (
    <div>
      <p>Ejercicio 3</p>
      {loading ? (
        <p className="loading">⏳ Cargando usuarios... lorem200</p>
      ) : (
        users.map((user) => <p>Nombre: {user.name} </p>)
      )}{" "}
    </div>
  );
};

export default UsersList;
