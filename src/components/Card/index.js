import styles from "./Card.module.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Card({ programData }) {
  const card = (
    <div className={styles.card}>
      <div className={styles.posterContainer}>
        <img
          className={styles.poster}
          src={programData.images["Poster Art"].url}
          alt="Poster Art"
        ></img>
      </div>
      <div className={styles.titleContainer}>
        <p>{programData.title}</p>
      </div>
    </div>
  );

  return (
    <Popup trigger={card} modal nested>
      <div className={styles.cardModal}>
        <div className={styles.cardPoster}>
          <img
            className={styles.modalPoster}
            src={programData.images["Poster Art"].url}
            alt="Poster Art"
          ></img>
        </div>
        <div className={styles.cardDetails}>
          <h2>{programData.title}</h2>
          <div>{programData.description}</div>
          <span className={styles.releaseYear}>{programData.releaseYear}</span>
        </div>
      </div>
    </Popup>
  );
}

export default Card;
