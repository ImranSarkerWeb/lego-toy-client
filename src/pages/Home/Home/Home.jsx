import { Suspense, lazy } from "react";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";

import ServiceCard from "../ServiceCard/ServiceCard";
import TabSection from "../TabSection/TabSection";
const GalleryPreview = lazy(() => import("../Gallery/Gallery"));

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <ServiceCard></ServiceCard>
      <About></About>
      <Suspense fallback={<>Loding</>}>
        <GalleryPreview />
      </Suspense>
      <TabSection></TabSection>
    </div>
  );
};

export default Home;
