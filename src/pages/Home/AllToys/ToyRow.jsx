/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ToyRow = ({ toy }) => {
  const { user, notify } = useContext(AuthContext);
  const {
    _id,
    toyName,
    category,
    photo,
    sellerEmail,
    sellerName,
    rating,
    desciption,
    qty,
    price,
  } = toy;

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
        <div className="font-bold">{toyName}</div>
      </td>
      <td>{sellerName}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{qty}</td>
      <th>
        {user ? (
          <Link to={`../toys/${_id}`} className="btn btn-xs ">
            View Details
          </Link>
        ) : (
          <Link onClick={notify} to={`../toys/${_id}`} className="btn btn-xs ">
            View Details
          </Link>
        )}
      </th>
    </tr>
  );
};

export default ToyRow;