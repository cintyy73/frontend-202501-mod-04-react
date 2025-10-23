import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [user, setUser] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
     {!user && <Register
        userName={userName}
        password={password}
        confirmPassword={confirmPassword}
        setUserName={setUserName}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
      />}
      <Login
        userName={userName}
        password={password}
        user={user}
        passwordLogin={passwordLogin}
        setUser={setUser}
        setPasswordLogin={setPasswordLogin}
      />
      <WelcomeMessage user={user} />
   
    </div>
  );
}

export default App;
