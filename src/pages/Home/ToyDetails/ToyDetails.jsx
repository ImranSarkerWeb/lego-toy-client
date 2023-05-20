import { useLoaderData } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";
import useTitle from "../../../hooks/useTitle";
import { useEffect } from "react";

const ToyDetails = () => {
  useTitle("Toy Details ");
  const toy = useLoaderData();
  const {
    toyName,
    photo,
    sellerEmail,
    sellerName,
    rating,
    desciption,
    qty,
    price,
  } = toy;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="card my-20 lg:card-side bg-base-100 shadow-xl">
      <figure className="md:w-1/2 mx-auto">
        <img src={photo} alt="Album" />
      </figure>
      <div className="card-body lg:w-1/2">
        <h2 className="card-title text-4xl mb-6 mx-auto">{toyName}</h2>

        <div className="flex justify-between">
          <h1 className="badge badge-success  my-3 p-4 md:text-lg">
            Price: ${price}
          </h1>
          <h1 className="badge badge-ghost  my-3 p-4 md:text-lg">
            Quantity: {qty} pc(s)
          </h1>
        </div>
        <p>
          <span className="font-bold">Details: </span>
          {desciption}
        </p>
        <div className="flex flex-col mt-5 md:flex-row items-center">
          <p className="flex mb-4 md:mb-0 items-center gap-2">
            <span className="badge badge-warning p-3 "> Ratings:</span>
            <ReactStarsRating
              className="flex"
              isEdit={false}
              value={parseFloat(rating)}
            />
          </p>
          <div>
            {" "}
            <h2 className="card-title ms-auto">Seller: {sellerName}</h2>
            <span className="badge ms-auto badge-ghost badge-sm">
              {sellerEmail}
            </span>
          </div>
        </div>
        <button className="btn mx-auto mt-6 btn-wide border-none bg-error hover:bg-error-content  transition-all duration-300 ring-offset-2 animate-pulse">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ToyDetails;
