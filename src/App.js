import { useState } from "react";
import Rules from "./Components/Rules";
import Header from "./Components/Header";
import Game from "./Components/Game/Game";
import "./App.css";

function App() {
  const [rules, setRules] = useState(false);

  const showRulesHandler = () => {
    setRules(!rules);
  };

  return (
    <div className="App">
      <main className="container">
        {rules ? <Rules showRules={showRulesHandler} /> : ""}
        <Header />
        <Game />
        <button className="btn" onClick={showRulesHandler}>
          RULES
        </button>
      </main>
    </div>
  );
}

export default App;
