import { useLoaderData } from "react-router-dom";
import ToyRow from "./toyRow";
import useTitle from "../../../hooks/useTitle";
import { useEffect, useState } from "react";

const AllToys = () => {
  useTitle("All Toys");

  const [toys, setToys] = useState([]);
  const loadedToys = useLoaderData();
  useEffect(() => {
    setToys(loadedToys);
  }, [loadedToys]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.search.value;
    fetch(`https://lego-store-server.vercel.app/search?q=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  return (
    <div>
      <div className="md:flex mx-auto justify-between">
        {" "}
        <h1 className="font-bold my-4">
          {" "}
          Showing {toys.length >= 20 ? 20 + " toys" : toys.length} Out Of{" "}
          {toys.length}
        </h1>
        <form onSubmit={handleSearch} className="flex justify-end gap-4 mb-2">
          {" "}
          <div className="form-control">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <input className="btn btn-accent" type="submit" value="search" />
        </form>
      </div>

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
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {toys &&
              toys
                .slice(0, 20)
                .map((toy) => <ToyRow key={toy._id} toy={toy}></ToyRow>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
