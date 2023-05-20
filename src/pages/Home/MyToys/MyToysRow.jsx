/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const MyToysRow = ({ toy, handleDelete }) => {
  const { user } = useContext(AuthContext);
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
        <Link to={`/updatemytoy/${_id}`}>
          <button className="btn text-white btn-accent btn-xl mr-4">
            <FaEdit />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="btn text-white btn-error btn-xl mr-4"
        >
          <FaTrash />
        </button>
      </th>
    </tr>
  );
};

export default MyToysRow;
