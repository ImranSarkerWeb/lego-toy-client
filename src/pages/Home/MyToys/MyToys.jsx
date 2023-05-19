import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState();
  const email = user?.email;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = myToys.filter((toy) => toy._id !== id);
            setMyToys(remaining);
          });
      }
    });
  };

  const handleUpdate = (id) => {
    console.log(id);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [email]);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Thumb</th>

              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>
                Available <br /> Quantity
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {myToys &&
              myToys.map((toy) => (
                <MyToysRow
                  key={toy._id}
                  toy={toy}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                ></MyToysRow>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
