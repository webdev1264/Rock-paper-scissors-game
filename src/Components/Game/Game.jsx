import { useState } from "react";
import Selection from "./Selection";
import Result from "./Result";
import styles from "./game.module.css";

const shapes = ["scissors", "paper", "rock", "lizard", "spock"];

const gamePattern = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

const Game = ({ changeScore }) => {
  const [pick, setPick] = useState();

  const [randomShape, setRandomShape] = useState();

  const [result, setresult] = useState();

  const getRandomShape = () => {
    const randomNum = Math.round(Math.random() * 4);
    return shapes[randomNum];
  };

  const pickShapeHandler = (name) => {
    const housePick = getRandomShape();
    setRandomShape(housePick);
    setPick(name);
    if (name === housePick) {
      setresult("draw");
      return;
    }
    if (gamePattern[name].includes(housePick)) {
      setresult("win");
      changeScore("+");
      return;
    }
    setresult("lose");
    changeScore();
  };

  const restart = () => {
    setPick();
  };

  return (
    <div className={styles.container}>
      {!pick ? (
        <Selection pickShape={pickShapeHandler} shapes={shapes} />
      ) : (
        <Result
          pick={pick}
          randomShape={randomShape}
          result={result}
          restart={restart}
        />
      )}
    </div>
  );
};

export default Game;
