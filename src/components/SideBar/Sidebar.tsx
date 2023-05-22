import { BsPencil } from "react-icons/bs";

import styles from "./sideBar.module.scss";
import Avatar from "../Avatar/Avatar";

const Sidebar = () => {
  return (
    <aside className={styles["sidebar"]}>
      <header className={styles["sidebar-cover"]}></header>
      <div className={styles["sidebar-perfil"]}>
        <Avatar
          src={"https://avatars.githubusercontent.com/u/22178998?v=4"}          
        />
        <h2 className={styles["name"]}>Gustavo Siqueira</h2>
        <p className={styles["profission"]}>Front-end Developer</p>
      </div>
      <footer className={styles["sidebar-edit"]}>
        <a href="#">
          <BsPencil />
          <span>Editar seu perfil</span>
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
