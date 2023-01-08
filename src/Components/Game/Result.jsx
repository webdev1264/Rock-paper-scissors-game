import { useEffect, useState } from "react";
import Shape from "./Shape";
import styles from "./result.module.css";

const Result = (props) => {
  const { randomShape, result, restart } = props;
  const [displayResult, setDisplayResult] = useState(false);
  const [displayRandom, setDisplayRandom] = useState(false);

  useEffect(() => {
    const intervalIdRandom = setTimeout(() => {
      setDisplayRandom(true);
      clearInterval(intervalIdRandom);
    }, 1000);
    const intervalId = setTimeout(() => {
      setDisplayResult(true);
      clearInterval(intervalId);
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.shapesWrapper}>
        <div className={styles.shapeWrapper}>
          <Shape {...props} name={props.pick} display={displayResult} />
          <span className={styles.youPick}>YOU PICKED</span>
        </div>
        <div className={styles.shapeWrapper}>
          {!displayRandom ? (
            <div className={styles.round}></div>
          ) : (
            <Shape
              {...props}
              name={randomShape}
              randomShape={randomShape}
              className="random"
              display={displayResult}
            />
          )}
          <span className={styles.housePick}>THE HOUSE PICKED</span>
        </div>
        <div
          className={`${styles.resultWrapper} ${
            displayResult ? styles.visible : ""
          }`}
        >
          <p className={styles.result}>
            {result !== "draw" ? `you ${result}` : result}
          </p>
          <button className={styles.btn} onClick={restart}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
