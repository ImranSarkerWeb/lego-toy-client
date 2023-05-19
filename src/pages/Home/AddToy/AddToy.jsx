import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Player } from "@lottiefiles/react-lottie-player";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyname.value;
    const photo = form.photo.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const desciption = form.desciption.value;
    const qty = form.qty.value;
    const toyInfo = {
      toyName,
      photo,
      sellerEmail,
      sellerName,
      rating,
      price,
      category,
      desciption,
      qty,
    };

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <div>
      <div className="flex justify-between">
        <Player
          autoplay
          loop
          src="https://assets8.lottiefiles.com/packages/lf20_tf6wSv.json"
          style={{ height: "75px", width: "75px" }}
        ></Player>
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_vfmyxu76.json"
          style={{ height: "75px", width: "75px" }}
        ></Player>
      </div>
      <div className="hero mb-20">
        <div className="w-full max-w-6xl card shadow-2xl bg-base-100">
          <div className="card-body ">
            <form onSubmit={handleAddToy} className="space-y-4">
              <div className="w-full flex  gap-4 ">
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Toy Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="toyname"
                    placeholder="Type your toy name"
                    className="w-full input input-accent input-bordered"
                  />
                </div>
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Toy Photo Url</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="photo"
                    placeholder="Photo URL"
                    className="w-full input input-accent input-bordered"
                  />
                </div>
              </div>
              <div className="w-full flex  gap-4 ">
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="sellerName"
                    defaultValue={user.displayName}
                    placeholder="Seller Name"
                    className="w-full input input-accent input-bordered"
                  />
                </div>
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Seller Email</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="sellerEmail"
                    defaultValue={user?.email}
                    placeholder="Seller Email"
                    className="w-full input input-accent input-bordered"
                  />
                </div>
              </div>
              {/* sub category select item */}
              <div className="w-full flex  gap-4 ">
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Sub Category</span>
                  </label>
                  <select
                    defaultValue=""
                    required
                    onChange={handleSelectChange}
                    className="select select-accent w-full"
                  >
                    <option value="" disabled hidden>
                      Select your toy category
                    </option>
                    <option value="Robot">Robot Toys</option>
                    <option value="Brick">Brick Toys</option>
                    <option value="Doll">Doll Toys</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    name="price"
                    placeholder="Price"
                    className="w-full input input-accent input-bordered"
                  />
                </div>
              </div>
              <div className="w-full flex  gap-4 ">
                <div className="w-1/2">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="number"
                    required
                    name="rating"
                    placeholder="Rating"
                    step="0.01"
                    min="0"
                    max="5"
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
                  value="Add Now"
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

export default AddToy;
