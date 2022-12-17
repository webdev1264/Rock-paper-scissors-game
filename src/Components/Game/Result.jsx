import Shape from "./Shape";
import styles from "./result.module.css";

const Result = (props) => {
  const { randomShape, result, restart } = props;

  return (
    <div className={styles.container}>
      <div className={styles.shapeWrapper}>
        <Shape {...props} name={props.pick} />
        <Shape {...props} name={randomShape} randomShape={randomShape} />
        <div className={styles.round}></div>
      </div>
      <p className={styles.result}>{result}</p>
      <button onClick={restart}>Play again</button>
    </div>
  );
};

export default Result;
