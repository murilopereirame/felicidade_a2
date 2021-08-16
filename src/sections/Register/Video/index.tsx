import logo_big from "../../../assets/logo_big.svg";
import "./styles.css";

const Video = () => {
  return (
    <div className="vo-container">
      <img src={logo_big} alt="Logo Felicidade a 2" />
      <iframe
        src="https://www.youtube-nocookie.com/embed/ewjifT7P_6Q"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
