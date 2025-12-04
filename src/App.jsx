import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { CounterProvider } from "./context/CounterContext";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import { useUser } from "./hooks/useUser";

function App() {

  const {user} = useUser()
  return (
    <div>
      <Profile />
      <p>{user.name}</p>
      <Login />
      <CounterProvider>
        <div className="container">
          <CounterDisplay />
          <CounterControls />
        </div>
      </CounterProvider>
    </div>
  );
}

export default App;
