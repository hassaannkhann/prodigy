import Header from "../../Components/Header/Header";
import Slider from "../../Components/Carousel/Slider";
import ServicesMain from "../../Components/Services/ServicesMain";
import Footer from "../../Components/Footer/Footer";
import OurPartners from "../../Components/OurPartners/OurPartners";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Slider/>
      <ServicesMain />
      <OurPartners />
      <Footer/>
    </div>
  );
};

export default Home;
