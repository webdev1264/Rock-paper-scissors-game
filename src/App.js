import { useState } from "react";
import Rules from "./Components/Rules/Rules";
import Header from "./Components/Header/Header";
import Game from "./Components/Game/Game";
import "./App.css";

let count = 0;

function App() {
  const [showRules, setShowRules] = useState(false);

  const [score, setScore] = useState(count);

  const showRulesHandler = () => {
    setShowRules(!showRules);
  };

  const changeScoreHandler = (sign) => {
    setTimeout(() => {
      sign === "+" ? count++ : count--;
      setScore(count);
    }, 2000);
  };

  return (
    <div className="App">
      <main className="container">
        {showRules ? <Rules showRules={showRulesHandler} /> : ""}
        <Header score={score} />
        <Game changeScore={changeScoreHandler} />
        <button className="btn" onClick={showRulesHandler}>
          RULES
        </button>
      </main>
    </div>
  );
}

export default App;
