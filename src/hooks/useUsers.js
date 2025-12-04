import { useEffect, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("iniciando petición");
        setLoading(true);
        setError(null);

        console.log("📡 Haciendo fetch a la API...");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          // Si el servidor responde con error (404, 500, etc.)
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setUsers(data);
        console.log(response);
      } catch (err) {
        console.log(error , err);
      } finally {
        console.log("🏁 Finalizando petición");
        setLoading(false);
      }
    };

    fetchUsers();
  }, [error]);

  return { users, loading, error };
};
