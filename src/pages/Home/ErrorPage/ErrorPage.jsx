import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-[10%]">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img
        className="w-1/2 mx-auto mb-5"
        src="https://i.ibb.co/ScLfpct/error-2129569-1280.jpg"
        alt="404"
      />
      <Link className="text-accent text-2xl" to="/">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
