import Shape from "./Shape";
import styles from "./selection.module.css";

const Option = (props) => {
  const { shapes } = props;
  return (
    <div className={styles.container}>
      {shapes.map((shape, id) => (
        <Shape {...props} key={id} name={shape} />
      ))}
    </div>
  );
};

export default Option;
