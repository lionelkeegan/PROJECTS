/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
// import styles from "./Navbar.module.css";
// import { Link } from "react-router-dom";
/**
 * import css sith styled components
 */
 import StyledNavbar from "./Navbar.styled";
 import { Link } from 'react-router-dom';

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavbar>
      <div>
      <nav>
        <div>
          <h1>Covid ID</h1>
        </div>
        <div>
          <ul>
          <li><Link to={"/"}>Global</Link></li>
          <li><Link to={'/covid/Indonesiapage'}>Indonesia</Link></li>
          <li><Link to={'/covid/Provinsipage'}>Provinsi</Link></li>
          <li><Link to={'/'}>About</Link></li>

          
            {/* <li className={styles.navbar__item}><Link to={"/"}>Global</Link></li>
            <li className={styles.navbar__item}><Link to={"/covid/Indonesiapage"}>Indonesia </Link></li>
            <li className={styles.navbar__item}><Link to={"/covid/Provinsipage"}>Provinsi </Link></li>
            <li className={styles.navbar__item}><Link>About </Link></li> */}
          </ul>
        </div>
      </nav>
    </div>
    </StyledNavbar>
    
  );
}

export default Navbar;
