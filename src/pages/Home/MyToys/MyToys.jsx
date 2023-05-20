import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaSortNumericDown, FaSortNumericUpAlt } from "react-icons/fa";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [toggle, setToggle] = useState(true);
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
        fetch(`https://lego-store-server.vercel.app/toys/${id}`, {
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
  const handleSort = () => {
    fetch(
      `https://lego-store-server.vercel.app/mysortedtoys?email=${email}&sort=${toggle}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setToggle(!toggle);
      });
  };
  useEffect(() => {
    fetch(`https://lego-store-server.vercel.app/mytoys?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [email]);
  return (
    <div>
      {myToys.length ? (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="text-center">Thumb</th>

                <th>Toy Name</th>
                <th>Seller</th>
                <th>Sub-Category</th>
                <th>
                  <div className="flex items-center gap-2">
                    {" "}
                    Price{" "}
                    {toggle ? (
                      <button
                        onClick={handleSort}
                        className="btn btn-xs text-xl btn-accent text-white"
                      >
                        <FaSortNumericDown></FaSortNumericDown>
                      </button>
                    ) : (
                      <button
                        onClick={handleSort}
                        className="btn btn-xs text-xl btn-accent text-white"
                      >
                        <FaSortNumericUpAlt></FaSortNumericUpAlt>
                      </button>
                    )}
                  </div>
                </th>
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
                  ></MyToysRow>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_rdjfuniz.json"
            style={{ height: "400px", width: "400px" }}
          ></Player>
          <h2 className="text-4xl text-center my-6">Please Add Some toys</h2>
        </div>
      )}
    </div>
  );
};

export default MyToys;
