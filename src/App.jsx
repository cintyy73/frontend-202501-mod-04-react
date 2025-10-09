import "./App.css";
import Layout from "./components/Layout";
import List from "./components/List";

const students = [
  {
    id: 1,
    name: "Emma Johnson",
    age: 20
  },
  {
    id: 2,
    name: "Liam Smith",
    age: 19
  },
  {
    id: 3,
    name: "Olivia Brown",
    age: 21
  },
  {
    id: 4,
    name: "Noah Davis",
    age: 18
  },
  {
    id: 5,
    name: "Ava Wilson",
    age: 22
  },
  {
    id: 6,
    name: "William Miller",
    age: 20
  },
  {
    id: 7,
    name: "Sophia Garcia",
    age: 19
  },
  {
    id: 8,
    name: "James Rodriguez",
    age: 21
  }
];

const teachers = [
  {
    id: 1,
    name: "Dr. Robert Anderson",
    age: 45
  },
  {
    id: 2,
    name: "Prof. Jennifer Martinez",
    age: 38
  },
  {
    id: 3,
    name: "Dr. Michael Thompson",
    age: 52
  },
  {
    id: 4,
    name: "Prof. Sarah White",
    age: 41
  },
  {
    id: 5,
    name: "Dr. David Lee",
    age: 48
  },
  {
    id: 6,
    name: "Prof. Lisa Clark",
    age: 36
  },
  {
    id: 7,
    name: "Dr. Mark Harris",
    age: 44
  },
  {
    id: 8,
    name: "Prof. Karen Lewis",
    age: 39
  }
];
function App() {
  return (
    <Layout>
      <h1 style={{
        color: "#3b82f6",
        fontSize: "2rem",
        margin: "2rem 0 1rem 0",
        padding: "1rem",
        backgroundColor: "white",
        border: "2px solid #cbd5e1",
        borderRadius: "8px",
        textAlign: "center"
      }}>
        👥 Estudiantes
      </h1>
      <List data={students} />
      
      <h1 style={{
        color: "#10b981",
        fontSize: "2rem", 
        margin: "2rem 0 1rem 0",
        padding: "1rem",
        backgroundColor: "white",
        border: "2px solid #cbd5e1", 
        borderRadius: "8px",
        textAlign: "center"
      }}>
        👨‍🏫 Profesores
      </h1>
      <List data={teachers} />
    </Layout>
  );
}

export default App;
