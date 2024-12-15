import style from "./navbar.module.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";


const Navbar = () => {



  return (
    <>

    <div className={style.navbarContener}>
      <div className={style.logo}>

      <div> <img src={logo} className={style.logo} alt=""/>  </div>

        <Link>RAS TOUR</Link>
      </div>

<div>
      <div className={style.navbarpages}>
        <ul>
          <li>
              <Link to="/register">Register</Link>
          </li>
          <li>
              <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
   </div>
  </>
  );
};

export default Navbar;
