import { useContext, useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Tab3 = () => {
  const { user, notify } = useContext(AuthContext);
  const [legoDoll, setLegoDoll] = useState([]);

  useEffect(() => {
    fetch("https://lego-store-server.vercel.app/categorytoys/Doll")
      .then((res) => res.json())
      .then((data) => setLegoDoll(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {legoDoll &&
        legoDoll.map((doll) => {
          return (
            <div
              key={doll._id}
              className="card w-[95%] md:w-full mx-auto md:mx-0 glass"
            >
              <figure className="w-1/2 h-1/2 md:w-3/4 mx-auto">
                <img src={doll.photo} alt={doll.toyName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title mx-auto text-center">
                  {doll.toyName}
                </h2>
                <h1 className="badge badge-success mx-auto my-3 p-4 text-lg">
                  Price: ${doll.price}
                </h1>
                <p className="flex mx-auto items-center gap-2">
                  <span className="badge badge-warning p-3 "> Ratings:</span>
                  <ReactStarsRating
                    className="flex"
                    isEdit={false}
                    value={parseFloat(doll?.rating)}
                  />
                </p>

                <div className="card-actions justify-end mt-6">
                  {user ? (
                    <Link
                      to={`../toys/${doll._id}`}
                      className="btn btn-xs btn-accent"
                    >
                      View Details
                    </Link>
                  ) : (
                    <Link
                      onClick={notify}
                      to={`../toys/${doll._id}`}
                      className="btn btn-xs btn-accent"
                    >
                      View Details
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Tab3;
