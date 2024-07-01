import { Link } from "react-router-dom";

import styles from './NavBar.module.css'
import Logo1 from '../assets/Logo-img.png';
import Logo2 from '../assets/Logo-text.png'

const NavBar = () => {
  return (
    <div className = {styles.container}>
      <div className = {styles.logo}>
        <img src={Logo1} alt="Logo" />
        <span><img src={Logo2} alt="Logo" /></span>
      </div>
      <div className = {styles.navbar}>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.btn}>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default NavBar;
