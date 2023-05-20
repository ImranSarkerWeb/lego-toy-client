import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Team = () => {
  const socialBtnClass =
    "btn btn-circle bg-accent hover:bg-accent-focus border-none text-3xl hover:text-4xl hover:duration-300";
  return (
    <div className="my-28">
      <div className="text-center my-16">
        <h3 className="text-accent inline-block py-1 px-6  border-2 border-dashed border-accent font-bold text-xl">
          Team
        </h3>
        <h1 className="text-6xl my-10 font-bold"> Creative Team</h1>
      </div>

      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="center-center"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="md:w-1/3">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                className="mx-auto w-36 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2"
              />
            </div>
            <div className=" text-center md:text-left md:w-2/3">
              <h1 className="text-3xl font-bold"> Imran Sarker</h1>
              <p className="py-3 text-xl text-neutral-500">CEO</p>
              <p>
                Practice skills they will need as adults. Adults on occasion use
                toys to form and strengthen.
              </p>
              <div>
                <div className="flex gap-5 justify-center md:justify-start items-center mt-4">
                  <a className={socialBtnClass}>
                    <FaFacebook />
                  </a>
                  <a className={socialBtnClass}>
                    <FaTwitter />
                  </a>
                  <a className={socialBtnClass}>
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor-placement="center-center"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className="flex mt-8 md:mt-0 flex-col md:flex-row items-center gap-8"
          >
            <div className="md:w-1/3">
              <img
                src="https://randomuser.me/api/portraits/women/66.jpg"
                className="mx-auto w-36 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2"
              />
            </div>
            <div className=" text-center md:text-left md:w-2/3">
              <h1 className="text-3xl font-bold"> Sarah Becky</h1>
              <p className="py-3 text-xl text-neutral-500">Founder</p>
              <p>
                World around us Younger children use toys to discover their
                identity help their bodies.
              </p>
              <div>
                <div className="flex gap-5 justify-center md:justify-start items-center mt-4">
                  <a className={socialBtnClass}>
                    <FaFacebook />
                  </a>
                  <a className={socialBtnClass}>
                    <FaTwitter />
                  </a>
                  <a className={socialBtnClass}>
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
