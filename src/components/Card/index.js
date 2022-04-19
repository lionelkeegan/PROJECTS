/**
 * import css module
 */
import React from "react";
import styles from "./index.module.css";

function Card(props) {
    // destructing props
  const { status, total,} = props;

  return (
    <div className={styles.card}>
        <h4 className={styles.status}>{status}</h4>
        <h2>{total.toLocaleString()}</h2>
    </div>
  );
}

export default Card;
