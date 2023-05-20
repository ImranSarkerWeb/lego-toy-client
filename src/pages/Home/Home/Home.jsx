import { Suspense, lazy } from "react";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import ServiceCard from "../ServiceCard/ServiceCard";
import CounterUp from "../CounterUp/CounterUp";
import Team from "../Team/Team";
import Loader from "../../shared/Loader/Loader";
import useTitle from "../../../hooks/useTitle";

const GalleryPreview = lazy(() => import("../Gallery/Gallery"));
const TabPreview = lazy(() => import("../TabSection/TabSection"));

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Carousel></Carousel>
      <ServiceCard></ServiceCard>
      <About></About>
      <Suspense fallback={<Loader />}>
        <GalleryPreview />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <TabPreview />
      </Suspense>
      <CounterUp></CounterUp>
      <Team></Team>
    </div>
  );
};

export default Home;
