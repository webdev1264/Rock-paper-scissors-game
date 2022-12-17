import { useState } from "react";
import Rules from "./Components/Rules";
import Header from "./Components/Header";
import Game from "./Components/Game/Game";
import "./App.css";

let count = 0;

function App() {
  const [rules, setRules] = useState(false);

  const [score, setScore] = useState(count);

  const showRulesHandler = () => {
    setRules(!rules);
  };

  const addScoreHandle = () => {
    count += 1;
    setScore(count);
  };

  return (
    <div className="App">
      <main className="container">
        {rules ? <Rules showRules={showRulesHandler} /> : ""}
        <Header score={score} />
        <Game addScore={addScoreHandle} />
        <button className="btn" onClick={showRulesHandler}>
          RULES
        </button>
      </main>
    </div>
  );
}

export default App;
