import styles from "./header.module.css";
import logo from "../data/images/logo-bonus.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.scoreWrapper}>
        <h2 className={styles.heading}>SCORE</h2>
        <p className={styles.counter}>12</p>
      </div>
    </div>
  );
};

export default Header;
