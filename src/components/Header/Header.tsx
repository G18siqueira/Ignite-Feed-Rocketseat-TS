import LogoSvg from "../../assets/logo-ignite.svg";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={`container`}>
        <div className={styles["header-content"]}>
          <img
            src={LogoSvg}
            className={styles["header-logo"]}
            alt="logo ignite"
          />
          <h1>Ignite Feed</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
