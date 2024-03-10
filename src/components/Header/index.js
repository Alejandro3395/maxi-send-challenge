import styles from "./Header.module.css";
import homeLogo from "../../assets/home.svg";

function Header({selectedPage, setSelectdPageHandler, setHasErrorStateHandler}) {

  return (
    <div className={styles.header}>
      <div className={styles.mainSection}>
        <div style={{display: 'flex'}}>
          {selectedPage !== "titles" ? (
            <img
              className={styles.homeButton}
              src={homeLogo}
              title="Return to main page"
              alt="homeIcon"
              onClick={() => {
                setSelectdPageHandler('titles');
                setHasErrorStateHandler(false);
              }}
            ></img>
          ) : (
            ''
          )}
          <h1 className={styles.title}>DEMO Streaming</h1>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.logInButton}>
            Log in
          </button>
          <button type="button" className={styles.trialButton}>
            Start your free trial
          </button>
        </div>
      </div>
      <div className={styles.subSection}>
        <h3>Popular {selectedPage}</h3>
      </div>
    </div>
  );
}

export default Header;
