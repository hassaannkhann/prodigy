import Header from "../../Components/Header/Header";
import Slider from "../../Components/Carousel/Slider";
import ServicesMain from "../../Components/Services/ServicesMain";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Slider/>
      <ServicesMain />
      <Footer/>
    </div>
  );
};

export default Home;
