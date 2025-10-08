import "./App.css";
import { Button } from "./components/Button";
import ButtonChildren from "./components/ButtonChildren";
import Greeting from "./components/Greeting";
import Layout from "./components/Layout";
import { List } from "./components/List";

// const name = "Melanie";
const isLogged = true;
const data = {
  dni: 4154564,
  date: "25-02-89",
};

function App() {
  return (
    <Layout>
      <ButtonChildren>Click</ButtonChildren>
      <ButtonChildren>Click-dos</ButtonChildren>
      <ButtonChildren>Click-tres</ButtonChildren>

      <Greeting data={data} name="Radhi" age={23} isStudent={true} />
      <List isLogged={isLogged} />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <Button />
      <Button />
      <Button />
      <p>Soy children</p>
      <Button />
      {/* //cancelar rojo */}
      <Button text="Cancelar" color="red" />
    </Layout>
  );
}

export default App;
