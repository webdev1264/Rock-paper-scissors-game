import styles from "./shape.module.css";
import scissors from "../../data/images/icon-scissors.svg";
import paper from "../../data/images/icon-paper.svg";
import rock from "../../data/images/icon-rock.svg";
import lizard from "../../data/images/icon-lizard.svg";
import spock from "../../data/images/icon-spock.svg";
import Layers from "./Layers";

const Shape = ({
  name,
  pick,
  pickShape,
  randomShape,
  className = "",
  display,
  result,
}) => {
  const imgUrl =
    name === "scissors"
      ? scissors
      : name === "paper"
      ? paper
      : name === "rock"
      ? rock
      : name === "lizard"
      ? lizard
      : name === "spock"
      ? spock
      : "";

  return (
    <div
      className={`${styles.shape} ${styles[name]} ${
        pick === name || randomShape ? styles.picked : ""
      } ${className ? styles[className] : ""} ${display ? styles.visible : ""}`}
      onClick={() => !pick && pickShape(name)}
    >
      {result === "win" && pick === name ? <Layers /> : ""}
      {result === "lose" && pick !== name ? <Layers /> : ""}
      <img className={styles.icon} src={imgUrl} alt="scissors" />
    </div>
  );
};

export default Shape;
