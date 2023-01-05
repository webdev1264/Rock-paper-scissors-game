import { useEffect, useState } from "react";
import Shape from "./Shape";
import styles from "./result.module.css";

const Result = (props) => {
  const { randomShape, result, restart } = props;
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setDisplay(true);
      clearInterval(intervalId);
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.shapesWrapper}>
        <div className={styles.shapeWrapper}>
          <Shape {...props} name={props.pick} />
          <span className={styles.youPick}>YOU PICKED</span>
        </div>
        <div className={styles.shapeWrapper}>
          {!display ? (
            <div className={styles.round}></div>
          ) : (
            <Shape
              {...props}
              name={randomShape}
              randomShape={randomShape}
              className="random"
              display={display}
            />
          )}
          <span className={styles.housePick}>THE HOUSE PICKED</span>
        </div>
        <div
          className={`${styles.resultWrapper} ${display ? styles.visible : ""}`}
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
