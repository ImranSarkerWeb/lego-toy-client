/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
  const { user, notify } = useContext(AuthContext);
  const { _id, toyName, category, photo, sellerName, qty, price } = toy;

  return (
    <tr>
      <th>
        <div className=" relative w-24 h-24">
          <img
            className="w-full h-auto transition-all duration-300 transform-gpu  hover:scale-[2] hover:translate-x-6 hover:-translate-y-6 z-10"
            src={photo}
            alt={toyName}
          />
        </div>
      </th>
      <td>
        <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-pink-100 ">
          {toyName}
        </div>
      </td>
      <td className="text-blue-500">{sellerName}</td>
      <td>
        {category == "Doll" ? (
          <span className="text-emerald-800">{category}</span>
        ) : category == "Brick" ? (
          <span className="text-amber-800">{category}</span>
        ) : (
          <span className="text-fuchsia-900">{category}</span>
        )}
      </td>
      <td>
        <span className="bg-secondary rounded-lg text-base-100 p-[5px]">
          ${price}
        </span>{" "}
      </td>
      <td>
        <span className="badge-ghost rounded-lg p-[6px]">{qty}</span>
      </td>
      <th>
        {user ? (
          <Link
            to={`../toys/${_id}`}
            className="btn btn-xs  btn-warning  transition-all duration-300 animate-pulse"
          >
            View Details
          </Link>
        ) : (
          <Link
            onClick={notify}
            to={`../toys/${_id}`}
            className="btn btn-xs btn-warning transition-all duration-300 animate-pulse"
          >
            View Details
          </Link>
        )}
      </th>
    </tr>
  );
};

export default ToyRow;
