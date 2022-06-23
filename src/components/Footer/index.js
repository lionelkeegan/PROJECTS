/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
 import styles from "./index.module.css";

 function Footer() {
   /**
    * Menggunakan styles yang sudah diimport.
    * Memanggilnya menggunakan expression.
    */
   return (
     <div className={styles.container}>
       <footer className={styles.footer}>
         <h2 className={styles.footer__title}>Covid ID</h2>
         <p className={styles.footer__author}>Created by ACHMAD IRVAN FAUZI <br></br>
         <a className={styles.footer__link} href="https://github.com/lionelkeegan">@lionelkeegan</a></p>
       </footer>
     </div>
   );
 }
 
 export default Footer;
 