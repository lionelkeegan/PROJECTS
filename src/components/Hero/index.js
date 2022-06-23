/**
 * Import CSS Module Hero/JUMBOTRON.
 * Disimpan di object styles.
 */
import React from "react";
import styles from "./index.module.css";
import logo from "./img.png";

function Hero() {
    /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero__left}>
        <img
             className={styles.hero__image}
             src={logo} 
             alt="img"
           />
        </div>
        <div className={styles.hero__right}>
          <div className={styles.hero__title}>
            <h1 className={styles.title}>Covid ID</h1>
            <p className={styles.subtitle}>Monitoring Perkembangan Covid</p>
          </div>
          <div className={styles.hero__body}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>
          <div className={styles.hero__button}>
            <button>Vaccine</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
