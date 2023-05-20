import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file

import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [legoItems, setLegoItems] = useState([]);

  useEffect(() => {
    fetch("https://lego-store-server.vercel.app/legosinfo")
      .then((res) => res.json())
      .then((data) => setLegoItems(data))
      .catch((error) => console.error(error.message));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleScroll = () => {
    AOS.refresh();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="my-10 pb-5 ">
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="center-center"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        className="text-center mb-12"
      >
        <h3 className="text-accent inline-block py-1 px-6  border-2 border-dashed border-accent font-bold text-xl">
          Lego Gallery
        </h3>
      </div>
      <div className="w-[90%]  overflow-hidden h-full mx-auto grid md:grid-cols-4 gap-4">
        {legoItems.length &&
          legoItems.map((toy) => (
            <GalleryCard key={toy._id} toy={toy}></GalleryCard>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
