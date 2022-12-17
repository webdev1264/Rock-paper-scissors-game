import rules from "../data/images/image-rules-bonus.svg";
import close from "../data/images/icon-close.svg";
import styles from "./rules.module.css";

const Rules = ({ showRules }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>RULES</h1>
      <img className={styles.rulesImg} src={rules} alt="rules" />
      <img
        className={styles.closeImg}
        src={close}
        alt="close"
        onClick={showRules}
      />
    </div>
  );
};

export default Rules;
