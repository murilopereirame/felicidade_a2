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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?1=pt_BR&phone=5518997488990"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/alcionericci"
        >
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/alcionericci/"
        >
          <img src={ig} alt="Instagram" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:contato@alfabetizacaoafetiva.com.br"
        >
          <img src={email} alt="Email" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
