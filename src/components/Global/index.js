/**
 * Import CSS Module movies.
 * Disimpan di object styles.
 * import data global indonesia
 */
import React from "react";
import data from "../../utils/constants/indonesia";
import Card from "../Card";
import styles from "./index.module.css";

function Global() {
    /**
   * state movies
   */
  return (
    <div className={styles.container}>
      <div className={styles.global}>
        <div className={styles.global__title}>
          <h1 className={styles.title}>Indonesia</h1>
          <p className={styles.subtitle}>Data Covid Berdasarkan Global</p>
        </div>
        <div className={styles.global__body}>
          {data.indonesia.map((data) => (
            <Card
              key={data.status}
              status={data.status}
              total={data.total}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Global;
