import Footer from "../../sections/Common/Footer";
import Navbar from "../../sections/Common/Navbar";
import About from "../../sections/Main/About";
import Forms from "../../sections/Main/Forms";
import "./styles.css";

const Main = () => {
  return (
    <div className="mn-container">
      <Navbar />
      <div className="mn-content">
        <About />
        <Forms />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
