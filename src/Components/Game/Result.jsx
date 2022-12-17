import Shape from "./Shape";
import styles from "./result.module.css";

const Result = (props) => {
  const { randomShape, result, restart } = props;

  return (
    <div className={styles.container}>
      <div className={styles.shapeWrapper}>
        <div>
          <Shape {...props} name={props.pick} />
        </div>
        <Shape {...props} name={randomShape} randomShape={randomShape} />
        <div className={styles.round}></div>
      </div>
      <span className={styles.youPick}>YOU PICKED</span>
      <span className={styles.housePick}>THE HOUSE PICKED</span>
      <p className={styles.result}>
        {result !== "Draw" ? `You ${result}` : result}
      </p>
      <button className={styles.btn} onClick={restart}>
        PLAY AGAIN
      </button>
    </div>
  );
};

export default Result;
