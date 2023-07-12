import { useState } from "react";
import "./App.css";
import SeuNome from "./Components/SeuNome";
import Saudacao from "./Components/Saudacao";

function App() {
  const [nome, setNome] = useState();
  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      {nome && <Saudacao name={nome} />}
    </div>
  );
}

export default App;
