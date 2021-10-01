import "./styles.css";
import alcione from "../../../assets/alcione.png";

const Footer = () => {
  return (
    <div className="ft-container">
      <div className="ft-wrapper">
        <div className="ft-img">
          <img src={alcione} alt="Alcione" />
        </div>
        <p>
          Com vasta experiência clínica e Especialista em Terapia de Casal e
          Família, vai te ajudar a melhorar seu relacionamento, e a encontrar a
          felicidade A2.
        </p>
      </div>
    </div>
  );
};

export default Footer;
