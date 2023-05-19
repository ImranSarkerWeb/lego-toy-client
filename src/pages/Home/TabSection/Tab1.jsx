import { useEffect, useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";
import { Link } from "react-router-dom";

const Tab1 = () => {
  const [legoRobot, setLegoRobot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categorytoys/Robot")
      .then((res) => res.json())
      .then((data) => setLegoRobot(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {legoRobot &&
        legoRobot.map((robot) => {
          return (
            <div
              key={robot._id}
              className="card w-[95%] md:w-full mx-auto md:mx-0 glass"
            >
              <figure className="w-1/2 h-1/2 md:w-3/4 mx-auto">
                <img src={robot.photo} alt={robot.toyName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title mx-auto text-center">
                  {robot.toyName}
                </h2>
                <h1 className="badge badge-success mx-auto my-3 p-4 text-lg">
                  Price: ${robot.price}
                </h1>
                <p className="flex mx-auto items-center gap-2">
                  <span className="badge badge-warning p-3 "> Ratings:</span>
                  <ReactStarsRating
                    className="flex"
                    isEdit={false}
                    value={parseFloat(robot?.rating)}
                  />
                </p>

                <div className="card-actions justify-end mt-6">
                  <Link
                    to={`../toys/${robot._id}`}
                    className="btn btn-xs btn-accent"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Tab1;
