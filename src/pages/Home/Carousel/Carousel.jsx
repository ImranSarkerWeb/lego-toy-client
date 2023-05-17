const Carousel = () => {
  return (
    <div className="carousel h-[460px] w-full">
      {/* slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 p-4 md:ps-16 space-y-8">
            <h1 className="text-3xl text-center md:text-left md:text-6xl font-bold">
              {" "}
              Welcome To The Best Lego Store
            </h1>
            <p>
              A toy is an item that is used in play especially one designed for
              such use It is mainly intended for use by children, though may
              also be marketed.
            </p>
            <div className="flex gap-4">
              {" "}
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered input-success w-full  "
              />
              <button className="btn btn-accent">Submit</button>
            </div>
          </div>
          <div className="w-1/2">
            <img src="https://i.ibb.co/wK1qRZ5/pngwing-com-1.png" />
          </div>
        </div>
        <div className="absolute flex  justify-between transform -translate-y-1/2 left-0 right-5 top-1/2">
          <a
            href="#slide4"
            className="btn bg-accent hover:bg-accent-focus border-none  hover:text-xl btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn bg-accent hover:bg-accent-focus border-none  hover:text-xl btn-circle"
          >
            ❯
          </a>
        </div>
      </div>

      {/* slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 p-4 md:ps-16 space-y-8">
            <h1 className="text-3xl text-center md:text-left md:text-6xl font-bold">
              {" "}
              Welcome To The Best Lego Store
            </h1>
            <p>
              A toy is an item that is used in play especially one designed for
              such use It is mainly intended for use by children, though may
              also be marketed.
            </p>
            <div className="flex gap-4">
              {" "}
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered input-success w-full  "
              />
              <button className="btn btn-accent">Submit</button>
            </div>
          </div>
          <div className="w-2/3 md:w-1/2">
            <img src="https://slidesigma.com/themes/html/toystore/assets/img/home-1/540x400.jpg" />
          </div>
        </div>
        <div className="absolute flex  justify-between transform -translate-y-1/2 left-0 right-5 top-1/2">
          <a
            href="#slide1"
            className="btn bg-accent hover:bg-accent-focus border-none  hover:text-xl btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn bg-accent hover:bg-accent-focus border-none  hover:text-xl btn-circle"
          >
            ❯
          </a>
        </div>
      </div>

      {/* slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 p-4 md:ps-16 space-y-8">
            <h1 className="text-3xl text-center md:text-left md:text-6xl font-bold">
              {" "}
              Welcome To The Best Lego Store
            </h1>
            <p>
              A toy is an item that is used in play especially one designed for
              such use It is mainly intended for use by children, though may
              also be marketed.
            </p>
            <div className="flex gap-4">
              {" "}
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered input-success w-full  "
              />
              <button className="btn btn-accent">Submit</button>
            </div>
          </div>
          <div className="w-1/2">
            <img src="https://i.ibb.co/NWL6qP5/pngwing-com.png" />
          </div>
        </div>
        <div className="absolute flex  justify-between transform -translate-y-1/2 left-0 right-5 top-1/2">
          <a
            href="#slide2"
            className="btn bg-accent hover:bg-accent-focus border-none  hover:text-xl btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn bg-accent hover:bg-accent-focus border-none  hover:text-xl btn-circle"
          >
            ❯
          </a>
        </div>
      </div>

      {/* slide 4  */}

      <div id="slide4" className="carousel-item relative w-full">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 p-4 md:ps-16 space-y-8">
            <h1 className="text-3xl text-center md:text-left md:text-6xl font-bold">
              {" "}
              Welcome To The Best Lego Store
            </h1>
            <p>
              A toy is an item that is used in play especially one designed for
              such use It is mainly intended for use by children, though may
              also be marketed.
            </p>
            <div className="flex gap-4">
              {" "}
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered input-success w-full  "
              />
              <button className="btn btn-accent">Submit</button>
            </div>
          </div>
          <div className="w-1/2">
            <img src="https://slidesigma.com/themes/html/toystore/assets/img/home-1/540x400-0.jpg" />
          </div>
        </div>
        <div className="absolute flex  justify-between transform -translate-y-1/2 left-0 right-5 top-1/2">
          <a
            href="#slide3"
            className="btn bg-accent hover:bg-accent-focus border-none  hover:text-xl btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn bg-accent hover:bg-accent-focus border-none  hover:text-xl btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
