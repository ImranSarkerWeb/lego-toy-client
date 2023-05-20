import { useContext, useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Tab2 = () => {
  const [legoBrick, setLegoBrick] = useState([]);
  const { user, notify } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://lego-store-server.vercel.app/categorytoys/Brick")
      .then((res) => res.json())
      .then((data) => setLegoBrick(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {legoBrick &&
        legoBrick.map((brick) => {
          return (
            <div
              key={brick._id}
              className="card w-[95%] md:w-full mx-auto md:mx-0 glass"
            >
              <figure className="w-1/2 h-1/2 md:w-3/4 mx-auto">
                <img src={brick.photo} alt={brick.toyName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title mx-auto text-center">
                  {brick.toyName}
                </h2>
                <h1 className="badge badge-success mx-auto my-3 p-4 text-lg">
                  Price: ${brick.price}
                </h1>
                <p className="flex mx-auto items-center gap-2">
                  <span className="badge badge-warning p-3 "> Ratings:</span>
                  <ReactStarsRating
                    className="flex"
                    isEdit={false}
                    value={parseFloat(brick?.rating)}
                  />
                </p>

                <div className="card-actions justify-end mt-6">
                  {user ? (
                    <Link
                      to={`../toys/${brick._id}`}
                      className="btn btn-xs btn-accent"
                    >
                      View Details
                    </Link>
                  ) : (
                    <Link
                      onClick={notify}
                      to={`../toys/${brick._id}`}
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

export default Tab2;
