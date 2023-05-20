import { Player } from "@lottiefiles/react-lottie-player";
// eslint-disable-next-line no-unused-vars
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import { useEffect } from "react";

const ServiceCard = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="space-y-4 md:space-y-0 mx-auto md:flex justify-around  mb-6">
      <div
        data-aos="fade-right"
        // data-aos-anchor-placement="center-center"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="card w-96 bg-base-100 shadow-xl"
      >
        <figure className="px-10 pt-10">
          {/* <img
            src="https://i.ibb.co/Gkf93x5/lego-3501431-960-720.jpg"
            alt="Delivery Truck"
            className="rounded-xl"
          /> */}
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_eop7ymay.json"
            style={{ height: "200px", width: "200px" }}
          ></Player>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> Free Delievery!</h2>
          <p>The earliest toys are made from materials found in nature.</p>
        </div>
      </div>

      {/* card no 2  */}
      <div
        data-aos="fade-up"
        // data-aos-anchor-placement="center-center"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="card w-96 bg-base-100 shadow-xl"
      >
        <figure className="px-10 pt-10">
          {/* <img
            src="https://i.ibb.co/h73StMh/business-3948253-1280.jpg"
            alt="Money Back"
            className="rounded-xl "
          /> */}

          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_jOH2sn.json"
            style={{ height: "200px", width: "200px" }}
          ></Player>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Garaunteed Moneyback!</h2>
          <p>Toys became more widespread with the changing attitudes.</p>
        </div>
      </div>

      {/* three */}
      <div
        data-aos="fade-left"
        // data-aos-anchor-placement="center-center"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="card w-96 bg-base-100 shadow-xl"
      >
        <figure className="px-10 pt-10">
          {/* <img
            src="https://cdn.pixabay.com/photo/2018/11/21/21/54/bunny-3830669_960_720.jpg"
            alt="Payment"
            className="rounded-xl"
          /> */}
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_yzoqyyqf.json"
            style={{ height: "200px", width: "200px" }}
          ></Player>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Payment Options!</h2>
          <p>Blowing bubbles from leftover washing up soap became a popular.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
