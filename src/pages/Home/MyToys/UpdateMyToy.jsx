/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Player } from "@lottiefiles/react-lottie-player";
import useTitle from "../../../hooks/useTitle";

const UpdateMyToy = () => {
  useTitle("Update My Toy");
  const { user } = useContext(AuthContext);
  // https://assets3.lottiefiles.com/private_files/lf30_rzhdjuoe.json
  const [toy, setToy] = useState({});
  const { toyName, price, desciption, qty } = toy;
  const { id } = useParams();

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const desciption = form.desciption.value;
    const qty = form.qty.value;
    const toyUpdateInfo = {
      price,
      desciption,
      qty,
    };

    fetch(`http://localhost:5000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyUpdateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "You have updated the toy!", "success");
        }
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);
  return (
    <div className="mx-5">
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/private_files/lf30_rzhdjuoe.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <h3 className="text-center -mt-16 mb-10 text-6xl font-bold">{toyName}</h3>
      <div className="hero mb-20">
        <div className="w-full max-w-6xl card shadow-2xl bg-base-100">
          <div className="card-body ">
            <form onSubmit={handleAddToy} className="space-y-4">
              <div className="w-full flex  gap-4 ">
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    required
                    defaultValue={price}
                    name="price"
                    placeholder="Price"
                    step="0.01"
                    className="w-full input input-accent input-bordered"
                  />
                </div>
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="number"
                    required
                    defaultValue={qty}
                    name="qty"
                    placeholder="Available Quantity"
                    className="w-full input input-accent input-bordered"
                  />
                </div>
              </div>
              <div className="w-full ">
                <div className="">
                  <label className="label">
                    <span className="label-text">Detail description</span>
                  </label>
                  <textarea
                    rows="4"
                    cols="50"
                    defaultValue={desciption}
                    type="text"
                    required
                    name="desciption"
                    placeholder="Type your toy name"
                    className="w-full textarea textarea-accent"
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Update Now"
                  className="btn btn-accent"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyToy;
