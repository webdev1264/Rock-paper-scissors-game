import styles from "./shape.module.css";
import scrissors from "../../data/images/icon-scissors.svg";
import paper from "../../data/images/icon-paper.svg";
import rock from "../../data/images/icon-rock.svg";
import lizard from "../../data/images/icon-lizard.svg";
import spock from "../../data/images/icon-spock.svg";

const Shape = ({ name, pick, pickShape, randomShape }) => {
  const imgUrl =
    name === "scissors"
      ? scrissors
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
      }`}
      onClick={() => !pick && pickShape(name)}
    >
      <img className={styles.scissorsIcon} src={imgUrl} alt="scissors" />
    </div>
  );
};

export default Shape;
