import { Link } from "react-router-dom";
import lego from "../../../assets/logo/lego-logo.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socialBtnClass =
    "btn btn-circle btn-sm border-none text-xl text-center bg-accent hover:bg-accent-focus hover:duration-300";
  return (
    <footer className=" bg-base-200 text-base-content">
      <div className="footer p-10 bg-base-200 text-base-content">
        {" "}
        <div>
          <div className="text-3xl flex font-semibold items-center">
            <span> ---</span>
            <Link to="/">
              <img src={lego} className="w-20" />
            </Link>
            <span>---</span>
          </div>

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
          <p>
            Lego Industries Ltd.
            <br />
            Providing reliable lego toys since 2022
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-full md:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered input-accent w-full pr-16"
              />
              <button className="btn btn-accent absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-4">
        <p>Copyright © 2023 - All right reserved by Lego Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
