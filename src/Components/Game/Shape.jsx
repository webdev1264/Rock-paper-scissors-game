import styles from "./shape.module.css";
import scissors from "../../data/images/icon-scissors.svg";
import paper from "../../data/images/icon-paper.svg";
import rock from "../../data/images/icon-rock.svg";
import lizard from "../../data/images/icon-lizard.svg";
import spock from "../../data/images/icon-spock.svg";
import Layers from "./Layers";

const imgUrl = { scissors, paper, rock, lizard, spock };

const Shape = ({
  name,
  pick,
  pickShape,
  randomShape,
  className = "",
  result,
  display,
}) => {
  return (
    <div
      className={`${styles.shape} ${styles[name]} ${
        pick === name || randomShape ? styles.picked : ""
      } ${className ? styles[className] : ""}`}
      onClick={() => !pick && pickShape(name)}
    >
      {result === "win" && pick === name && display ? <Layers /> : ""}
      {result === "lose" && randomShape === name && display ? <Layers /> : ""}
      <img className={styles.icon} src={imgUrl[name]} alt={name} />
    </div>
  );
};

export default Shape;
