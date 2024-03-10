
import styles from "./Content.module.css";
import MoviesPage from "../../containers/MoviesPage";
import SeriesPage from "../../containers/SeriesPage";

function Content({ pageSelected, setSelectedPageHandler}) {

  const defaultPage = (
    <div className={styles.content}>
      {["Series", "Movies"].map((categoryLabel, index) => (
        <div
          key={index}
          className={styles.card}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedPageHandler(categoryLabel.toLowerCase());
          }}
        >
          <div className={styles.posterContainer}>
            <img
              className={styles.poster}
              src="/assets/placeholder.png"
              alt="Poster Art"
            ></img>
            <p className={styles.posterLabel}>{categoryLabel.toUpperCase()}</p>
          </div>
          <div className={styles.titleContainer}>
            <p>Popular {categoryLabel}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.content}>
      {pageSelected === "titles" ? (
        defaultPage
      ) : pageSelected === "movies" ? (
        <MoviesPage></MoviesPage>
      ) : (
        <SeriesPage></SeriesPage>
      )}
    </div>
  );
}

export default Content;
