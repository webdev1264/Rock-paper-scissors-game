import { useState } from "react";
import Selection from "./Selection";
import Result from "./Result";
import styles from "./game.module.css";

const shapes = ["scissors", "paper", "rock", "lizard", "spock"];
const randomNum = Math.ceil(Math.random() * 4);
const randomShape = shapes[randomNum];
const gamePattern = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

const Game = () => {
  const [pick, setPick] = useState();

  const [result, setresult] = useState();

  const pickShapeHandler = (name) => {
    setPick(name);
    if (name === randomShape) {
      setresult("Draw");
      return;
    }
    gamePattern[name].includes(randomShape)
      ? setresult("Win")
      : setresult("Lose");
  };

  const restart = () => {
    setPick();
  };

  console.log(result);
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
