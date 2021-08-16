import ig from "../../../assets/ig.svg";
import logo_min from "../../../assets/logo_min.svg";
import whatsapp from "../../../assets/whatsapp.svg";
import facebook from "../../../assets/facebook.svg";
import email from "../../../assets/email.svg";

import "./styles.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <a href="#">
          <img src={logo_min} />
        </a>
      </div>
      <div className="nav-social">
        <a href="#">
          <img src={whatsapp} />
        </a>
        <a href="#">
          <img src={facebook} />
        </a>
        <a href="#">
          <img src={ig} />
        </a>
        <a href="#">
          <img src={email} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
