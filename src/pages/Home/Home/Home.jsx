import About from "../About/About";
import Carousel from "../Carousel/Carousel";

// import Gallery from "../Gallery/Gallery";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <ServiceCard></ServiceCard>
      <About></About>
      {/* <Gallery></Gallery> */}
    </div>
  );
};

export default Home;
