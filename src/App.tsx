import Header from "./components/Header/Header";

import styles from "./app.module.scss";
import "./global.scss";
import Posts from "./components/Posts/Posts";
import Sidebar from "./components/SideBar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className={`container ${styles["wrapper"]}`}>
          <Sidebar />
          <Posts />
        </div>
      </main>
    </>
  );
}

export default App;
