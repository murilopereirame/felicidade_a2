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
          Você quer melhorar o seu relacionamento afetivo? Assista a aula
          inédita onde a psicóloga Alcione Ricci faz uma síntese da sua
          experiência acumulada em quase 40 anos de atividade clínica atendendo
          casais de todas as idades. O conteúdo é indicado para quem busca a
          Felicidade A2.
        </p>
      </div>
    </div>
  );
};

export default Footer;
