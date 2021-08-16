import Footer from "../../sections/Common/Footer";
import Navbar from "../../sections/Common/Navbar";
import Video from "../../sections/Register/Video";
import "./styles.css";

const Register = () => {
  return (
    <div className="mn-container">
      <Navbar />
      <div className="mn-content">
        <Video />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
