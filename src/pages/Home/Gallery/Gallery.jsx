/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [legoItem, setLegoItem] = useState({});

  useEffect(() => {
    fetch("/lego.json")
      .then((res) => res.json())
      .then((data) => setLegoItem(data))
      .catch((error) => console.error(error.message));
  }, []);

  const { toys } = legoItem;
  console.log(toys);
  return (
    <div className="my-10 pb-5 ">
      <div className="text-center mb-12">
        <h3 className="text-accent inline-block py-1 px-6  border-2 border-dashed border-accent font-bold text-xl">
          Lego Gallery
        </h3>
      </div>
      <div className="w-[90%] h-screen overflow-hidden md:h-full mx-auto grid md:grid-cols-4 gap-4">
        {toys &&
          toys.map((toy) => (
            <GalleryCard key={toy._id} toy={toy}></GalleryCard>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
