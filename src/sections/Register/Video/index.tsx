import logo_big from "../../../assets/logo_big.svg";
import "./styles.css";
import whats from "../../../assets/whatsapp_white.svg";
const Video = () => {
  return (
    <div className="vo-container">
      <img src={logo_big} alt="Logo Felicidade a 2" />
      <div className="vo-video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/ewjifT7P_6Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <a
          className="vo-whats"
          href="https://chat.whatsapp.com/K9xnrEFtnESIuW27nPOjL0"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img src={whats} className="wa-button" alt="WhatsApp" />
            <span>ENTRAR NO GRUPO DO WHATSAPP</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Video;
