import styles from "./styles/Rick.module.css";
import Link from "next/link";

export const Card = ({ id, name, status, species, location, image }) => {
  return (
    <Link href={`/rickAndMorty/${id}`}>
      <a className={styles.card}>
        <img src={image} alt={`${name} image`} />
        <div className={styles.cardText}>
          <h3 className={styles.cardName}>{name}</h3>
          <h5 className={styles.statusText}>
            <span
              className={
                status === "Alive" ? styles.statusGreen : styles.statusRed
              }
            ></span>{" "}
            {status} - {species}
          </h5>
          <div className={styles.locationContainer}>
            Last known Location: <b className={styles.loaction}>{location}</b>
          </div>
        </div>
      </a>
    </Link>
  );
};
